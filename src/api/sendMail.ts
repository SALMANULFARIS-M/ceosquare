import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const emailUser = 'ceo@ceosquare.in';
const emailPass = 'xwaidbcodktqgygx';

export default async function handler(req: VercelRequest, res: VercelResponse) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: emailUser, // Accessing with bracket notation and type assertion
          pass: emailPass,
      },
  });

  let mailOptions = {
      from: emailUser,
      to: 'info@ceosquare.in',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        return res.status(500).json({ error: 'Email could not be sent', details: error });
    }
}
