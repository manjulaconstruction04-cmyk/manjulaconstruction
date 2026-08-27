import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function GET() {
  const company = globalStore.getCompanyInfo();
  return NextResponse.json({ success: true, company });
}

export async function PATCH(request: Request) {
  try {
    const updates = await request.json();
    const company = globalStore.updateCompanyInfo(updates);
    return NextResponse.json({ success: true, company });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update company information";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
