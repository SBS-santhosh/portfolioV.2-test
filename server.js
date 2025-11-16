import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ success: false, message: "Missing fields" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 Message de ${name}`,
      html: `
        <h3>Nouvelle demande depuis le portfolio</h3>
        <p><b>Nom:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Sujet:</b> ${subject}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
      replyTo: email,
    });

    // Auto reply
    await transporter.sendMail({
      from: `"Santhosh Satheeskumar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Votre message a bien été reçu !",
      html: `
        <h2>Merci ${name} !</h2>
        <p>J'ai bien reçu ton message, je te répondrai rapidement.</p>
        <hr>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
