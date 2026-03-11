/**
 * WhatsApp Service for FenX AI
 * This service handles sending WhatsApp alerts to the founder.
 * In a production environment, this would integrate with Twilio, Meta WhatsApp API, or similar.
 */

export const sendWhatsAppAlert = async (message: string) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'
  const to = process.env.FOUNDER_WHATSAPP; // e.g., 'whatsapp:+1234567890'

  if (!accountSid || !authToken || !to) {
    console.warn('WhatsApp credentials missing. Alert logged to console:', message);
    return;
  }

  try {
    // Using native fetch to avoid extra dependencies
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${auth}`,
        },
        body: new URLSearchParams({
          From: from || '',
          To: to,
          Body: message,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Twilio API error:', errorData);
    } else {
      console.log('WhatsApp alert sent successfully');
    }
  } catch (error) {
    console.error('Error sending WhatsApp alert:', error);
  }
};
