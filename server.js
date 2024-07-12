import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { customerName, customerEmail, customerPhone, customerNote } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'gauranshkumar26@gmail.com',
      pass: '6394954790'
    }
  });

  let mailOptions = {
    from: 'gauranshkumar26@gmail.com',
    to: 'gauranshakash26@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      <p><strong>Phone:</strong> ${customerPhone || 'Not provided'}</p>
      <p><strong>Message:</strong> ${customerNote}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
