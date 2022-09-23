import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, name, gender } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const URL = process.env.NEXT_PUBLIC_FIREBASE_URL;

  console.log(hashPassword)
  if (req.method === "POST") {
    fetch(`${URL}/data.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, gender, email, password: hashPassword }),
    });
  }
};

export default handler;
