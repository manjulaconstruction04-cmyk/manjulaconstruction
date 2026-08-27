import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;

  const blogPosts = globalStore.getBlogPosts(category);
  return NextResponse.json({ success: true, count: blogPosts.length, blogPosts });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, content, author, category, image, readTime } = body;

    if (!title || !content) {
      return NextResponse.json({ success: false, error: "Title and content are required" }, { status: 400 });
    }

    const newPost = globalStore.addBlogPost({
      title,
      excerpt: excerpt || title,
      content,
      author: author || "Er. K. Manjunathan",
      category: category || "Civil Engineering",
      image: image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      readTime: readTime || "5 min read"
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to create blog post";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
