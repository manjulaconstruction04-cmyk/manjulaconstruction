import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET() {
  const brands = globalStore.getBrands();
  return NextResponse.json({ success: true, count: brands.length, brands });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, category, description, grade, logoText, accentColor, tagline } = body;

    if (!name || !category) {
      return NextResponse.json({ success: false, error: "Brand name and category are required" }, { status: 400 });
    }

    const newBrand = globalStore.addBrand({
      name,
      category,
      description: description || "",
      grade: grade || "Standard",
      logoText: logoText || name.toUpperCase(),
      accentColor: accentColor || "#D9A441",
      tagline: tagline || ""
    });

    return NextResponse.json({ success: true, brand: newBrand }, { status: 201 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to add brand";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
