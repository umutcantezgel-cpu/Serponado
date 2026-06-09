const fs = require('fs');
const path = require('path');
const https = require('https');
const { google } = require('googleapis');

// Note: Requires a valid service account JSON file
const KEY_FILE_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, '..', 'service-account.json');

async function getAccessToken() {
    if (!fs.existsSync(KEY_FILE_PATH)) {
        throw new Error(`Service account file not found at ${KEY_FILE_PATH}. Set GOOGLE_APPLICATION_CREDENTIALS or place service-account.json in root.`);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE_PATH,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token.token;
}

async function publishBatch(urls) {
    const token = await getAccessToken();

    const batchBoundary = 'batch_indexing_api_boundary';
    let body = '';

    urls.forEach((url, index) => {
        body += `--${batchBoundary}\r\n`;
        body += 'Content-Type: application/http\r\n';
        body += `Content-Transfer-Encoding: binary\r\n`;
        body += `Content-ID: <item-${index}>\r\n\r\n`;
        body += `POST /v3/urlNotifications:publish HTTP/1.1\r\n`;
        body += `Content-Type: application/json\r\n\r\n`;
        body += JSON.stringify({
            url: url,
            type: 'URL_UPDATED',
        }) + '\r\n\r\n';
    });

    body += `--${batchBoundary}--\r\n`;

    const options = {
        hostname: 'indexing.googleapis.com',
        path: '/batch',
        method: 'POST',
        headers: {
            'Content-Type': `multipart/mixed; boundary=${batchBoundary}`,
            'Authorization': `Bearer ${token}`,
            'Content-Length': Buffer.byteLength(body),
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        });

        req.on('error', (e) => reject(e));
        req.write(body);
        req.end();
    });
}

async function run() {
    try {
        const dbPath = path.join(__dirname, '..', 'lib', 'data', 'serponado_db.json');
        const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ms-schluesseldienst.vercel.app';
        
        const urls = db.records.map(r => `${siteUrl}/serponado/${r.slug}`);
        
        console.log(`Bereite Indexing-Push für ${urls.length} Serponado-URLs vor...`);

        // Indexing API accepts max 100 urls per batch
        const BATCH_SIZE = 100;
        for (let i = 0; i < urls.length; i += BATCH_SIZE) {
            const batch = urls.slice(i, i + BATCH_SIZE);
            console.log(`Pushing Batch ${i / BATCH_SIZE + 1} (${batch.length} URLs)...`);
            const response = await publishBatch(batch);
            console.log(`Batch Result: ${response.substring(0, 100)}...`);
        }

        console.log('Swarm Protocol: Indexing Push abgeschlossen.');
    } catch (e) {
        console.error('Fehler beim Indexing API Push:', e.message);
    }
}

// Nur ausführen, wenn direkt aufgerufen
if (require.main === module) {
    run();
}
