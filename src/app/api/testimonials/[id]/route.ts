import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = globalStore.deleteTestimonial(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Testimonial not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Testimonial deleted successfully" });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to delete testimonial";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
