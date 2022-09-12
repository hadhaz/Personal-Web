import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, messages, organization } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: ["achmad.had2003@mail.ugm.ac.id", email],
    subject: "I'm interest work with you",
    html: `<html><body><h2>Hi, I'm ${name} from ${organization}</h2><p>${messages}</p><p>If you also interest to work together you can reach me by my phone ${phone} or my email ${email}</p></body></html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send(req.body);
};

export default handler;
