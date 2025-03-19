import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
// import * as nodemailer from 'nodemailer'; // Import Nodemailer
// import * as dotenv from 'dotenv';
import cors from 'cors';

// dotenv.config(); // Load environment variables from .env file

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();


app.use(express.json()); // Enable JSON parsing
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded form data
app.use(cors()); // Enable CORS

// app.all('/api/contact', async (req, res) => { // Define your API endpoint

//   const { name, email, message } = req.body;

//   // Configure Nodemailer Transporter (Get credentials from environment variables)
//   const transporter = nodemailer.createTransport({
//       service: process.env['EMAIL_SERVICE'], // e.g., 'Gmail', 'SendGrid', 'Mailgun' - set in your environment
//       auth: {
//           user: process.env['EMAIL_USER'],    // Your email address - set in your environment
//           pass: process.env['EMAIL_PASSWORD'] // Your email password or app password - set in your environment
//       }
//   });

//   const mailOptions = {
//       from: process.env['EMAIL_USER'], // Your email address
//       to: 'your-recipient-email@example.com', // Your recipient email address (where you want to receive messages)
//       subject: 'New Contact Form Submission from Website',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//       // html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`, // For HTML email
//   };

//   try {
//       await transporter.sendMail(mailOptions);
//       console.log('Email sent successfully');
//       res.json({ success: true }); // Respond to the frontend with success
//   } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, error: 'Failed to send email' }); // Respond with error
//   }
// });
/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
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
