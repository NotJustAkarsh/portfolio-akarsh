import nodemailer from 'nodemailer';
import { connectDB } from './_lib/db.js';
import Contact from './_lib/Contact.js';

// ─── Body parser helper (Vercel doesn't auto-parse JSON) ─────────────────────
const parseBody = (req) =>
  new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', reject);
  });

// ─── Nodemailer transporter ───────────────────────────────────────────────────
const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

// ─── Email builders ───────────────────────────────────────────────────────────
const ownerEmail = ({ name, email, message }) => ({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `💼 New Message from ${name} — Portfolio Contact`,
  html: `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f0f0f;color:#fff;border-radius:16px;overflow:hidden;border:1px solid #27272a;">
      <div style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);padding:36px 40px;">
        <h1 style="margin:0;font-size:24px;font-weight:900;letter-spacing:-0.5px;">New Portfolio Message</h1>
        <p style="margin:8px 0 0;opacity:.85;font-size:14px;">Someone reached out through your portfolio contact form</p>
      </div>
      <div style="padding:36px 40px;">
        <div style="margin-bottom:28px;">
          <p style="margin:0 0 6px;color:#71717a;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">From</p>
          <p style="margin:0;font-size:18px;font-weight:700;">${name}</p>
        </div>
        <div style="margin-bottom:28px;">
          <p style="margin:0 0 6px;color:#71717a;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Email</p>
          <a href="mailto:${email}" style="color:#3b82f6;font-size:16px;text-decoration:none;font-weight:600;">${email}</a>
        </div>
        <div style="margin-bottom:32px;">
          <p style="margin:0 0 10px;color:#71717a;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Message</p>
          <div style="background:#18181b;border:1px solid #27272a;border-radius:12px;padding:20px 24px;">
            <p style="margin:0;line-height:1.7;color:#d4d4d8;font-size:15px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        <a href="mailto:${email}?subject=Re: Your message from Akarsh's Portfolio&body=Hi ${name},"
           style="display:inline-block;background:#3b82f6;color:#fff;padding:14px 28px;border-radius:50px;font-weight:700;font-size:13px;text-decoration:none;text-transform:uppercase;letter-spacing:1px;">
          Reply to ${name} →
        </a>
      </div>
      <div style="padding:20px 40px;border-top:1px solid #27272a;">
        <p style="margin:0;color:#52525b;font-size:12px;">
          Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })} IST
        </p>
      </div>
    </div>
  `,
});

const confirmationEmail = ({ name, email, message }) => ({
  from: `"Akarsh — Portfolio" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: `Thank You for Reaching Out, ${name} — Akarsh`,
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
    <body style="margin:0;padding:0;background:#09090b;font-family:'Segoe UI',Arial,sans-serif;">
      <div style="max-width:600px;margin:40px auto;background:#09090b;border:1px solid #27272a;border-radius:20px;overflow:hidden;">

        <!-- Header -->
        <div style="background:linear-gradient(135deg,#1d4ed8 0%,#3b82f6 60%,#60a5fa 100%);padding:48px 44px 40px;">
          <div style="display:inline-block;background:rgba(255,255,255,.15);border-radius:50px;padding:6px 16px;margin-bottom:20px;">
            <span style="color:#fff;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Message Received</span>
          </div>
          <h1 style="margin:0 0 10px;color:#fff;font-size:30px;font-weight:900;letter-spacing:-0.5px;line-height:1.2;">Thank You, ${name}.</h1>
          <p style="margin:0;color:rgba(255,255,255,.85);font-size:15px;line-height:1.6;">Your message has been received and I will be in touch shortly.</p>
        </div>

        <!-- Body -->
        <div style="padding:44px;">
          <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px;line-height:1.8;">Dear ${name},</p>
          <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px;line-height:1.8;">
            Thank you for taking the time to reach out through my portfolio. I truly appreciate your interest and look forward to connecting with you.
          </p>
          <p style="margin:0 0 32px;color:#a1a1aa;font-size:15px;line-height:1.8;">
            I have received your message and will personally review it. You can expect a response from me within
            <strong style="color:#e4e4e7;">1–2 business days</strong>.
            Should the matter be urgent, please feel free to reply directly to this email.
          </p>

          <!-- Message recap -->
          <div style="background:#18181b;border:1px solid #27272a;border-left:3px solid #3b82f6;border-radius:12px;padding:24px 28px;margin-bottom:36px;">
            <p style="margin:0 0 12px;color:#71717a;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Your Message</p>
            <p style="margin:0;color:#d4d4d8;font-size:14px;line-height:1.8;font-style:italic;">"${message.replace(/\n/g, '<br>')}"</p>
          </div>

          <p style="margin:0 0 8px;color:#a1a1aa;font-size:15px;line-height:1.8;">Once again, thank you for your message. I look forward to the opportunity of collaborating with you.</p>
          <p style="margin:0 0 36px;color:#a1a1aa;font-size:15px;line-height:1.8;">Warm regards,</p>

          <!-- Signature (table layout for Outlook compat) -->
          <table cellpadding="0" cellspacing="0" style="background:#18181b;border:1px solid #27272a;border-radius:14px;margin-bottom:36px;width:100%;">
            <tr>
              <td style="padding:24px 20px 24px 24px;width:66px;vertical-align:middle;">
                <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#1d4ed8,#60a5fa);text-align:center;line-height:60px;">
                  <span style="color:#fff;font-size:24px;font-weight:900;line-height:60px;">A</span>
                </div>
              </td>
              <td style="padding:24px 24px 24px 8px;vertical-align:middle;">
                <p style="margin:0 0 2px;color:#fff;font-size:16px;font-weight:700;">Akarsh</p>
                <p style="margin:0 0 4px;color:#71717a;font-size:13px;">Full-Stack Developer &amp; Designer</p>
                <a href="mailto:notjustakarsh@gmail.com" style="color:#3b82f6;font-size:13px;text-decoration:none;">notjustakarsh@gmail.com</a>
              </td>
            </tr>
          </table>

          <div style="border-top:1px solid #27272a;margin-bottom:28px;"></div>
          <p style="margin:0;color:#52525b;font-size:12px;line-height:1.7;">
            This is an automated confirmation email. Please do not reply if it was sent in error. Your personal data is handled with care and will not be shared with any third parties.
          </p>
        </div>

        <!-- Footer -->
        <div style="padding:20px 44px 28px;background:#0f0f0f;border-top:1px solid #27272a;text-align:center;">
          <p style="margin:0;color:#3f3f46;font-size:11px;letter-spacing:.5px;">
            © ${new Date().getFullYear()} Akarsh &nbsp;·&nbsp; All Rights Reserved
          </p>
        </div>

      </div>
    </body>
    </html>
  `,
});

// ─── Vercel Serverless Handler ────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Parse body — Vercel does NOT auto-parse JSON unlike Express
  const body = await parseBody(req);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, message) are required.',
    });
  }

  try {
    // 1. Connect to MongoDB (cached across warm invocations)
    await connectDB();

    // 2. Save to DB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // 3. Send both emails in parallel
    const transporter = createTransporter();
    await Promise.all([
      transporter.sendMail(ownerEmail({ name, email, message })),
      transporter.sendMail(confirmationEmail({ name, email, message })),
    ]);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });
  } catch (err) {
    console.error('[contact] Error:', err.message, err.stack);

    if (err.name === 'ValidationError') {
      const msg = Object.values(err.errors)[0].message;
      return res.status(400).json({ success: false, message: msg });
    }

    // Temporary: expose real error for diagnosis — remove after fixing
    return res.status(500).json({
      success: false,
      message: `Server error: ${err.message}`,
    });
  }
}
