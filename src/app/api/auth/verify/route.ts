import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (token === "jwt_token_demo_manjula_admin_2026") {
      return NextResponse.json({
        success: true,
        user: globalStore.getAdminCredentials()
      });
    }

    return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Token verification failed";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
