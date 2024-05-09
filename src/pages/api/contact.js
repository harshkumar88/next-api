import nodemailer from "nodemailer";

export default function handler(req, res) {
  const { name, email, message } = req.body;

  // Send email using nodemailer

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rkharshkumar88@gmail.com",
      pass: "kprn xgqt cvfs plzb",
    },
  });

  const mailOptions = {
    from: "rkharshkumar88@gmail.com",
    to: email,
    subject: `New message from Harsh`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending message");
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send("Message sent");
    }
  });
}
