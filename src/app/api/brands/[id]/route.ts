import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const brand = globalStore.getBrandById(id);
    if (!brand) {
      return NextResponse.json({ success: false, error: "Brand not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, brand });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch brand";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const updates = await request.json();

    const updated = globalStore.updateBrand(id, updates);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Brand not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, brand: updated });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update brand";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = globalStore.deleteBrand(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Brand not found or already deleted" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Brand deleted successfully" });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to delete brand";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
