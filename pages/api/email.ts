import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

class CustomError {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");
  const { name: subject, email, phone, organization, messages } = req.body;
  try {
    await sendgrid.send({
      to: "achmad.had2003@mail.ugm.ac.id", // Your email where you'll receive emails
      from: "hadzami.id@gmail.com",
      subject: `${subject} from ${organization}`,
      html: `<div>Messages: ${messages}</div><div>Organization: ${organization}</div><div>Phone Number: ${phone}</div><div>Email: ${email}</div>`,
    });
  } catch (error) {
    if (error instanceof CustomError)
      return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
