import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;
  const featuredOnly = searchParams.get('featured') === 'true';

  const projects = globalStore.getProjects(category, featuredOnly);
  return NextResponse.json({ success: true, count: projects.length, projects });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, subcategory, location, builtUpArea, completionYear, scope, description, image, gallery, beforeImage, afterImage, featured, modelStage } = body;

    if (!title || !category || !location) {
      return NextResponse.json({ success: false, error: "Title, category, and location are required" }, { status: 400 });
    }

    const newProject = globalStore.addProject({
      title,
      category: category || 'Residential',
      subcategory: subcategory || 'Villa',
      location,
      builtUpArea: builtUpArea || '3,000 Sq.Ft',
      completionYear: completionYear || new Date().getFullYear().toString(),
      scope: scope || ['Turnkey Construction'],
      description: description || '',
      image: image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      gallery: gallery || [],
      beforeImage,
      afterImage,
      featured: Boolean(featured),
      modelStage: Number(modelStage) || 5
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to create project";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
