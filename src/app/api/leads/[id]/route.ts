import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const lead = globalStore.getLeadById(id);
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, lead });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch lead";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const { status, notes } = body;

    const updated = globalStore.updateLeadStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update lead";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = globalStore.deleteLead(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Lead not found or already deleted" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Lead successfully deleted" });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to delete lead";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

