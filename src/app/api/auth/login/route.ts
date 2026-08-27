import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (globalStore.verifyAdminCredentials(email, password)) {
      return NextResponse.json({
        success: true,
        user: globalStore.getAdminCredentials(),
        token: "jwt_token_demo_manjula_admin_2026"
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid admin email or password" },
      { status: 401 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Authentication error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
