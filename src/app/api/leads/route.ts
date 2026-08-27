import { NextResponse } from 'next/server';
import { globalStore } from '@/lib/store';
import { sendLeadNotificationEmail } from '@/lib/email-service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || undefined;
  const query = searchParams.get('query') || undefined;

  const leads = globalStore.getLeads(status, query);
  return NextResponse.json({ success: true, count: leads.length, leads });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, location, projectType, approxAreaSqFt, selectedPackage, budgetRange, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: "Name and phone number are required" }, { status: 400 });
    }

    const newLead = globalStore.addLead({
      name,
      phone,
      email: email || "N/A",
      location: location || "Coimbatore",
      projectType: projectType || "Residential",
      approxAreaSqFt: Number(approxAreaSqFt) || 2000,
      selectedPackage: selectedPackage || "Premium",
      budgetRange: budgetRange || "Not Specified",
      message: message || "Requested consultation via website form."
    });

    // Send email notification to owner/admin inbox if SMTP is configured
    const emailResult = await sendLeadNotificationEmail(newLead);

    return NextResponse.json({
      success: true,
      lead: newLead,
      emailSent: emailResult.sent,
      emailMessage: emailResult.message
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to process lead";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}


