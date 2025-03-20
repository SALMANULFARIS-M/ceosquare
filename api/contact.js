import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // ✅ Replace with your actual SMTP server
    port: 465,
    secure: true,
    auth: {
      user: 'ceo@ceosquare.in',
      pass: 'rqzyedzqrodjwpuq',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: "ceo@ceosquare.in",
      to: "info@ceosquare.in",
      subject: "📩 New Contact Inquiry Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333333; text-align: center;">📨 New Contact Form Submission</h2>
          <p style="font-size: 16px; color: #555;">Hello Team,</p>
          <p style="font-size: 16px; color: #555;">Someone submitted the contact form. Here are the details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; font-weight: bold;">Name</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; font-weight: bold;">Message</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>
          <p style="font-size: 16px; color: #555; margin-top: 20px;">Please reach out to the sender if required.</p>
          <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">CEO Square - Contact Inquiry</p>
        </div>
      `,
    });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
