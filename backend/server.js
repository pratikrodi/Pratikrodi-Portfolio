const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle email sending
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other email provider like outlook, yahoo, etc.
    auth: {
      user: 'prateekrodi@gmail.com', // Your email
      pass: 'xlno exfx napz rjap',  // Your email password
    },
  });

  const mailOptions = {
    from: email, // User's email as the "from" address
    to: 'prateekrodi@gmail.com', // Where to send the email (your email)
    subject: `Message from ${name}`,
    html: `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { padding: 20px; }
          .header { background-color: #f8f8f8; padding: 10px; text-align: center; border-bottom: 2px solid #e0e0e0; }
          .content { margin-top: 20px; }
          .footer { margin-top: 20px; padding: 10px; background-color: #f8f8f8; text-align: center; border-top: 2px solid #e0e0e0; }
          .highlight { color: #4A90E2; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Form Submission</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>Thank you for your message. We will get back to you soon!</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
