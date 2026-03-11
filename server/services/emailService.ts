import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, body: string) => {
  // Configure transporter with environment variables
  // Defaulting to a common SMTP setup (e.g., Gmail, SendGrid, etc.)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"FenX AI" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: body,
      html: body.replace(/\n/g, '<br>'),
    });
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    // We don't throw here to keep the API non-blocking as requested
    return null;
  }
};
