import clientPromise from './db';
import { Lead, PackagePlan } from './data-store';

export async function saveLeadToDb(lead: Lead) {
  try {
    if (!clientPromise) return;
    const client = await clientPromise;
    const db = client.db('manjula_construction');
    await db.collection('leads').updateOne(
      { id: lead.id },
      { $set: lead },
      { upsert: true }
    );
  } catch (err) {
    console.error('MongoDB Lead Sync Error:', err);
  }
}

export async function loadLeadsFromDb(): Promise<Lead[] | null> {
  try {
    if (!clientPromise) return null;
    const client = await clientPromise;
    const db = client.db('manjula_construction');
    const leads = await db.collection<Lead>('leads').find({}).toArray();
    if (leads.length === 0) return null;
    return leads.map(({ ...rest }) => {
      // Remove mongo _id field if present
      const copy = { ...rest };
      delete (copy as any)._id;
      return copy as Lead;
    });
  } catch (err) {
    console.error('MongoDB Fetch Leads Error:', err);
    return null;
  }
}

export async function savePackageToDb(pkg: PackagePlan) {
  try {
    if (!clientPromise) return;
    const client = await clientPromise;
    const db = client.db('manjula_construction');
    await db.collection('packages').updateOne(
      { id: pkg.id },
      { $set: pkg },
      { upsert: true }
    );
  } catch (err) {
    console.error('MongoDB Package Sync Error:', err);
  }
}

export async function loadPackagesFromDb(): Promise<PackagePlan[] | null> {
  try {
    if (!clientPromise) return null;
    const client = await clientPromise;
    const db = client.db('manjula_construction');
    const pkgs = await db.collection<PackagePlan>('packages').find({}).toArray();
    if (pkgs.length === 0) return null;
    return pkgs.map(({ ...rest }) => {
      const copy = { ...rest };
      delete (copy as any)._id;
      return copy as PackagePlan;
    });
  } catch (err) {
    console.error('MongoDB Fetch Packages Error:', err);
    return null;
  }
}

export async function saveAdminPasswordToDb(email: string, password: string) {
  try {
    if (!clientPromise) return;
    const client = await clientPromise;
    const db = client.db('manjula_construction');
    await db.collection('admin_credentials').updateOne(
      { email },
      { $set: { email, password, updatedAt: new Date().toISOString() } },
      { upsert: true }
    );
  } catch (err) {
    console.error('MongoDB Admin Pass Sync Error:', err);
  }
}

export async function loadAdminPasswordFromDb(email: string): Promise<string | null> {
  try {
    if (!clientPromise) return null;
    const client = await clientPromise;
    const db = client.db('manjula_construction');
    const doc = await db.collection<{ email: string; password: string }>('admin_credentials').findOne({ email });
    return doc?.password || null;
  } catch (err) {
    console.error('MongoDB Fetch Admin Pass Error:', err);
    return null;
  }
}
