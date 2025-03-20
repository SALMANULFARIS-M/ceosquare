import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { name, email, phone, address, product } = req.body;

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
      subject: "🛒 New Merchandise Order Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333333; text-align: center;">🛍️ New Order Received</h2>
          <p style="font-size: 16px; color: #555;">Hello Team,</p>
          <p style="font-size: 16px; color: #555;">You have received a new merchandise order. Below are the details:</p>
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
              <td style="padding: 10px; font-weight: bold;">Phone</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Product</td>
              <td style="padding: 10px;">${product}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; font-weight: bold;">Shipping Address</td>
              <td style="padding: 10px;">${address}</td>
            </tr>
          </table>
          <p style="font-size: 16px; color: #555; margin-top: 20px;">Please process this order at your earliest convenience.</p>
          <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">CEO Square - Merchandise Orders</p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: 'Order received' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}
