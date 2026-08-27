import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET() {
  const services = globalStore.getServices();
  return NextResponse.json({ success: true, count: services.length, services });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, subtitle, description, iconName, details, image } = body;

    if (!title || !description) {
      return NextResponse.json({ success: false, error: "Title and description are required" }, { status: 400 });
    }

    const newService = globalStore.addService({
      title,
      subtitle: subtitle || "",
      description,
      iconName: iconName || "Building2",
      details: details || [],
      image: image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    });

    return NextResponse.json({ success: true, service: newService }, { status: 201 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to create service";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
