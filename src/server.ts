import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer'; // Import Nodemailer

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');


const app = express();
const angularApp = new AngularNodeAppEngine();
// Middleware to parse JSON bodies
app.use(express.json());

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

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

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
});

app.post('/api/send-order', async (req, res) => {
  const { name, email, phone, address, product } = req.body;

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
});



app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
