import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function POST() {
  const currentCount = globalStore.incrementMagazineDownloads();
  return NextResponse.json({
    success: true,
    message: "Magazine download recorded",
    downloadsCount: currentCount
  });
}
