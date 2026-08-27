import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { builtUpAreaSqFt, packageId, floors, elevationWork, modularKitchen, compoundWallFt } = body;

    if (!builtUpAreaSqFt || Number(builtUpAreaSqFt) <= 0) {
      return NextResponse.json({ success: false, error: "Built-up area (Sq.Ft) must be greater than zero" }, { status: 400 });
    }

    const calculation = globalStore.calculateEstimate({
      builtUpAreaSqFt: Number(builtUpAreaSqFt),
      packageId: packageId || 'pkg-prm',
      floors: Number(floors) || 2,
      elevationWork: elevationWork !== undefined ? Boolean(elevationWork) : true,
      modularKitchen: modularKitchen !== undefined ? Boolean(modularKitchen) : true,
      compoundWallFt: Number(compoundWallFt) || 0
    });

    return NextResponse.json({ success: true, calculation });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to calculate construction estimate";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
