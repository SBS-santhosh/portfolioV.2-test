// api/contact.js — works directly on Vercel
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const currentDate = new Date().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });


  // Email to YOU
const notificationToYou = {
  from: `"Portfolio Contact V.2" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: ` Nouveau message de ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px; border-radius:8px;">
      <h2 style="color:#2563eb; margin-bottom:10px;">💬 Nouveau message depuis ton portfolioV.2</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> <a href="mailto:${email}" style="color:#2563eb;">${email}</a></p>
      <p><strong>Sujet :</strong> ${subject || "Sans sujet"}</p>
      <p><strong>Message :</strong></p>
      <div style="background:#fff; padding:12px 16px; border-left:4px solid #2563eb; border-radius:4px; margin:8px 0;">
        <p style="white-space: pre-wrap; margin:0;">${message}</p>
      </div>
      <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />
      <p style="font-size:14px; color:#4b5563;">
        <strong>Don't be dampass lazy shit replay them</strong><br/>
        <small style="color:#6b7280;">Reçu le ${currentDate}</small>
      </p>
    </div>
  `,
  replyTo: email,
};


  // Auto reply to the sender
const autoReplyToCustomer = {
  from: `"Santhosh Satheeskumar" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "✅ Votre message a bien été envoyé !",
  html: `
    <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px; border-radius:8px;">
      <h2 style="color:#2563eb; margin-bottom:15px;">Bonjour ${name},</h2>
      <p>Merci beaucoup pour votre message ! 📩</p>
      <p>Votre message a bien été reçu et je vous répondrai dès que possible.</p>

      <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />

      <div style="background:#fff; padding:15px 20px; border-left:4px solid #2563eb; border-radius:4px;">
        <p><strong>Récapitulatif :</strong></p>
        <p><strong>Sujet :</strong> ${subject || "Sans sujet"}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap; margin:0;">${message}</p>
      </div>
      <p style="margin-top:20px; font-style:italic; color:#6b7280;">  ⚠️ Ceci est un message automatique depuis le formulaire de contact du portfolio.  </p>
      <p style="margin-top:20px;">Merci encore pour votre prise de contact !</p>
      <p>— <strong>Santhosh Satheeskumar</strong></p>
    </div>
  `,
};


    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(notificationToYou),
      transporter.sendMail(autoReplyToCustomer),
    ]);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}
