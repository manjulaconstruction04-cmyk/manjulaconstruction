import nodemailer from 'nodemailer';
import { Lead } from './data-store';

export async function sendLeadNotificationEmail(lead: Lead): Promise<{ sent: boolean; message: string }> {
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'contact@manjulaconstruction.com';

  if (!smtpUser || !smtpPass) {
    console.log(`[EMAIL NOTICE] SMTP credentials not set in .env.local. Lead logged in CRM store.`);
    return {
      sent: false,
      message: 'SMTP credentials missing in process.env. Configure .env.local to enable instant inbox notifications.'
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #07090E; color: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #d9a441;">
        <h2 style="color: #d9a441; border-bottom: 2px solid #d9a441; padding-bottom: 10px;">
          🏗️ NEW CLIENT ENQUIRY - MANJULA CONSTRUCTION
        </h2>
        <p style="font-size: 14px; color: #cbd5e1;">A new consultation request has been submitted on your website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; text-align: left; font-size: 14px;">
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441; width: 30%;">Client Name:</th>
            <td style="padding: 10px; color: #ffffff; font-weight: bold;">${lead.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Phone Number:</th>
            <td style="padding: 10px; color: #f59e0b; font-weight: bold;">${lead.phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Email Address:</th>
            <td style="padding: 10px; color: #ffffff;">${lead.email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Site Location:</th>
            <td style="padding: 10px; color: #ffffff;">${lead.location}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Project Type:</th>
            <td style="padding: 10px; color: #ffffff;">${lead.projectType}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Approx Area:</th>
            <td style="padding: 10px; color: #ffffff;">${lead.approxAreaSqFt} Sq.Ft</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Selected Plan:</th>
            <td style="padding: 10px; color: #d9a441; font-weight: bold;">${lead.selectedPackage} Plan</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Budget Range:</th>
            <td style="padding: 10px; color: #ffffff;">${lead.budgetRange}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <th style="padding: 10px; color: #d9a441;">Message / Notes:</th>
            <td style="padding: 10px; color: #e2e8f0; font-style: italic;">${lead.message || 'None'}</td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px dashed #334155; font-size: 12px; color: #94a3b8;">
          Submitted at: ${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br/>
          Lead ID: ${lead.id}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Manjula Construction Website" <${smtpUser}>`,
      to: toEmail,
      subject: `🚨 New Lead: ${lead.name} (${lead.projectType} - ${lead.location})`,
      html: htmlContent
    });

    return { sent: true, message: 'Email notification sent successfully!' };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown email transport error';
    console.error('[EMAIL SEND ERROR]:', errorMsg);
    return { sent: false, message: `Failed to send email: ${errorMsg}` };
  }
}
