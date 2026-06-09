import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'lib', 'data', 'serponado_db.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const json = JSON.parse(fileContents);
    
    // Only return lightweight data to save bandwidth
    const lightweightRecords = json.records.map((r: any) => ({
      id: r.id,
      slug: r.slug,
      type: r.type,
      metaTitle: r.metaTitle,
    }));

    return NextResponse.json(lightweightRecords);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load Serponado Index' }, { status: 500 });
  }
}
