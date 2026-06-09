import fs from 'fs';
import path from 'path';

export interface SerponadoRecord {
  id: string;
  slug: string;
  type: string;
  h1: string;
  metaTitle: string;
  internal_links: string[];
  image_url: string;
}

interface SerponadoDb {
  records: SerponadoRecord[];
}

let cachedRecords: SerponadoRecord[] | null = null;

function getAllRecords(): SerponadoRecord[] {
  if (cachedRecords) return cachedRecords;
  const dataPath = path.join(process.cwd(), 'lib', 'data', 'serponado_db.json');
  const raw = fs.readFileSync(dataPath, 'utf8');
  const json: SerponadoDb = JSON.parse(raw);
  cachedRecords = json.records;
  return cachedRecords;
}

/**
 * Get the record matching the given slug.
 */
export function getRecordBySlug(slug: string): SerponadoRecord | undefined {
  const records = getAllRecords();
  return records.find((r) => r.slug === slug);
}

/**
 * Get all records of the same type/silo as the current slug,
 * excluding the current record itself.
 */
function getSiloGroup(currentSlug: string): SerponadoRecord[] {
  const records = getAllRecords();
  const current = records.find((r) => r.slug === currentSlug);
  if (!current) return [];
  return records.filter((r) => r.type === current.type && r.slug !== currentSlug);
}

/**
 * Get N sibling records from the same type/silo, picking them
 * from a deterministic cyclic position based on where the current
 * slug sits in its silo ring.
 */
export function getSiblings(currentSlug: string, count: number = 4): SerponadoRecord[] {
  const records = getAllRecords();
  const current = records.find((r) => r.slug === currentSlug);
  if (!current) return [];

  const silo = records.filter((r) => r.type === current.type);
  const idx = silo.findIndex((r) => r.slug === currentSlug);
  if (idx === -1) return [];

  const result: SerponadoRecord[] = [];
  for (let i = 1; i <= Math.min(count, silo.length - 1); i++) {
    const target = silo[(idx + i) % silo.length];
    if (target) {
      result.push(target);
    }
  }
  return result;
}

/**
 * Get the next N records in the cyclic ring (same silo type),
 * wrapping around when reaching the end.
 */
export function getNextInRing(currentSlug: string, count: number = 4): SerponadoRecord[] {
  // Same logic as getSiblings — both walk forward in the ring
  return getSiblings(currentSlug, count);
}

/**
 * Get the predecessor record in the ring (same silo type).
 * Wraps to the last record if the current is at position 0.
 */
export function getPredecessor(currentSlug: string): SerponadoRecord | null {
  const records = getAllRecords();
  const current = records.find((r) => r.slug === currentSlug);
  if (!current) return null;

  const silo = records.filter((r) => r.type === current.type);
  const idx = silo.findIndex((r) => r.slug === currentSlug);
  if (idx === -1) return null;

  // If only one record in the silo, there's no predecessor
  if (silo.length <= 1) return null;

  const predIdx = (idx - 1 + silo.length) % silo.length;
  return silo[predIdx] ?? null;
}

/**
 * Get all core_pillar records (the hub/pillar pages).
 */
export function getPillarHubs(): SerponadoRecord[] {
  const records = getAllRecords();
  return records.filter((r) => r.type === 'core_pillar');
}
