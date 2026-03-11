import { sendEmail } from './emailService.ts';
import { sendWhatsAppAlert } from './whatsappService.ts';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  businessType?: string;
  monthlyLeads?: string;
  source: 'assistant' | 'book-demo' | 'contact-form';
  message?: string;
}

export const processLead = async (db: any, data: LeadData) => {
  const { name, email, phone, businessType, monthlyLeads, source, message } = data;

  // 1️⃣ Store lead in database
  try {
    const stmt = db.prepare(`
      INSERT INTO leads (name, company, email, phone, industry, lead_volume, message, source)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      name,
      businessType || "N/A",
      email || "no-email@fenx.ai",
      phone,
      businessType || "N/A",
      monthlyLeads || "N/A",
      message || "N/A",
      source
    );
  } catch (error) {
    console.error("Database error:", error);
  }

  // 2️⃣ Notify founder via email
  try {
    const founderEmail = process.env.FOUNDER_EMAIL || "founder@fenx.ai";

    const founderSubject = `🔥 New FenX AI Lead (${source})`;

    const founderBody = `
New lead captured from FenX AI website.

Source: ${source}
Name: ${name}
Email: ${email || "Not provided"}
Phone: ${phone}
Business Type: ${businessType || "Not provided"}
Monthly Leads: ${monthlyLeads || "Not provided"}
Message: ${message || "N/A"}

Time: ${new Date().toLocaleString()}
`;

    await sendEmail(founderEmail, founderSubject, founderBody);
  } catch (error) {
    console.error("Founder email failed:", error);
  }

  // 3️⃣ WhatsApp alert (optional)
  try {
    const whatsappMsg = `🔥 *New FenX AI Lead*
    
*Source:* ${source}
*Name:* ${name}
*Phone:* ${phone}
*Business:* ${businessType || "N/A"}`;

    sendWhatsAppAlert(whatsappMsg);
  } catch (error) {
    console.log("WhatsApp skipped:", error);
  }

  // 4️⃣ Auto reply to client
  if (email && email !== "no-email@fenx.ai") {
    try {
      const clientSubject = "FenX AI — Demo Preparation Started ✅";

      const clientBody = `
Hi ${name},

Thanks for contacting FenX AI.

We've received your request and are preparing an automation strategy tailored for your business.

Our team will contact you shortly.

— FenX AI
`;

      await sendEmail(email, clientSubject, clientBody);
    } catch (error) {
      console.error("Client email failed:", error);
    }
  }

  return { success: true };
};