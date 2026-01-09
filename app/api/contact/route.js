import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, services } = await req.json();

    if (!name || !email || !message) {
      return new Response("Invalid data", { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["derrenamadeo@gmail.com"],
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Request:</strong> ${services}</p>
        <p>${message}</p>
      `,
    });

    return new Response("Email sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
