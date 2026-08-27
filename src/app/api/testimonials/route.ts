import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET() {
  const testimonials = globalStore.getTestimonials();
  return NextResponse.json({ success: true, count: testimonials.length, testimonials });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, projectType, location, rating, quote, avatarText } = body;

    if (!clientName || !quote) {
      return NextResponse.json({ success: false, error: "Client name and quote are required" }, { status: 400 });
    }

    const newTestimonial = globalStore.addTestimonial({
      clientName,
      projectType: projectType || "Residential Owner",
      location: location || "Coimbatore",
      rating: Number(rating) || 5,
      quote,
      avatarText: avatarText || clientName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
    });

    return NextResponse.json({ success: true, testimonial: newTestimonial }, { status: 201 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to add testimonial";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
