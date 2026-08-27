import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const service = globalStore.getServiceById(id);
    if (!service) {
      return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, service });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch service";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const updates = await request.json();

    const updated = globalStore.updateService(id, updates);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, service: updated });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update service";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = globalStore.deleteService(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Service not found or already deleted" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Service deleted successfully" });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to delete service";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
