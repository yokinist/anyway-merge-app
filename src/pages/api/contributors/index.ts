import { NextApiRequest, NextApiResponse } from "next";
import { contributors } from "~/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(contributors);
}
