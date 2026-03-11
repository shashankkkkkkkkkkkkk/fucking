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

  // 1. Store in Database
  try {
    const stmt = db.prepare(`
      INSERT INTO leads (name, company, email, phone, industry, lead_volume, message, source)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(
      name, 
      businessType || 'N/A', 
      email || 'no-email@fenx.ai', 
      phone, 
      businessType || 'N/A', 
      monthlyLeads || 'N/A', 
      message || 'N/A', 
      source
    );
  } catch (error) {
    console.error('Database error in processLead:', error);
    // Continue even if DB fails so notifications might still work
  }

  // 2. Send Founder Notification Email
  const founderEmail = process.env.FOUNDER_EMAIL || 'founder@fenx.ai';
  const founderSubject = `🔥 New FenX AI Lead (${source})`;
  const founderBody = `
    New lead captured from FenX AI website.
    
    Source: ${source}
    Name: ${name}
    Email: ${email || 'Not provided'}
    Phone: ${phone}
    Business Type: ${businessType || 'Not provided'}
    Monthly Leads: ${monthlyLeads || 'Not provided'}
    Message: ${message || 'N/A'}
    
    Time: ${new Date().toLocaleString()}
  `;
  
  // Fire and forget (async)
  sendEmail(founderEmail, founderSubject, founderBody);

  // 3. Send WhatsApp alert to founder
  const whatsappMsg = `🔥 *New FenX AI Lead*\n\n*Source:* ${source}\n*Name:* ${name}\n*Phone:* ${phone}\n*Business:* ${businessType || 'N/A'}`;
  sendWhatsAppAlert(whatsappMsg);

  // 4. Send automatic follow-up email to client
  if (email && email !== 'no-email@fenx.ai') {
    const clientSubject = 'FenX AI — Demo Preparation Started ✅';
    const clientBody = `
Hi ${name},

Thanks for contacting FenX AI.

We've received your request and are preparing an automation strategy tailored for your business.

Our team will contact you shortly.

— FenX AI
    `;
    sendEmail(email, clientSubject, clientBody);
  }

  return { success: true };
};
