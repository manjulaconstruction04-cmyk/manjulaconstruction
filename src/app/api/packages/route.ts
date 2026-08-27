import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET() {
  const packages = globalStore.getPackages();
  return NextResponse.json({ success: true, count: packages.length, packages });
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, pricePerSqFt, ...otherUpdates } = body;
    if (!id) {
      return NextResponse.json({ success: false, error: "Package ID is required" }, { status: 400 });
    }

    let updated;
    if (pricePerSqFt !== undefined && Object.keys(otherUpdates).length === 0) {
      updated = globalStore.updatePackagePrice(id, Number(pricePerSqFt));
    } else {
      const updates = pricePerSqFt !== undefined ? { pricePerSqFt: Number(pricePerSqFt), ...otherUpdates } : otherUpdates;
      updated = globalStore.updatePackage(id, updates);
    }

    if (!updated) {
      return NextResponse.json({ success: false, error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, package: updated });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update package";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
