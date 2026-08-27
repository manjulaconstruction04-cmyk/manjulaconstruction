import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET() {
  const stats = globalStore.getStats();
  return NextResponse.json({ success: true, stats });
}

export async function POST() {
  const visits = globalStore.incrementWebsiteVisits();
  return NextResponse.json({ success: true, websiteVisits: visits });
}
