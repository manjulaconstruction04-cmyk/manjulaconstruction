import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const post = globalStore.getBlogPostById(id);
    if (!post) {
      return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, post });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch blog post";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const updates = await request.json();

    const updated = globalStore.updateBlogPost(id, updates);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: updated });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update blog post";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = globalStore.deleteBlogPost(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Blog post not found or already deleted" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Blog post deleted successfully" });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to delete blog post";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
