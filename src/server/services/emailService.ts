import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to: string, subject: string, body: string) => {
  try {
    const response = await resend.emails.send({
      from: "FenX AI <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: body.replace(/\n/g, "<br>"),
      text: body,
    });

    console.log("✅ Email sent:", response);
    return response;

  } catch (error) {
    console.error("❌ Error sending email:", error);
    return null;
  }
};