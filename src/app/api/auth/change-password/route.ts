import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, error: "Both current and new password are required" },
        { status: 400 }
      );
    }

    const result = globalStore.updateAdminPassword(currentPassword, newPassword);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to change password" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Admin password changed successfully"
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Password change error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
