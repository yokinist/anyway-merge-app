import { NextApiRequest, NextApiResponse } from "next";
import { contributors } from "~/data";

export default function handler(
  { query: { slug } }: NextApiRequest,
  res: NextApiResponse
) {
  const contributor = contributors.find((p) => p.slug === slug);

  if (contributor) {
    res.status(200).json(contributor);
  } else {
    res.status(404).json({ message: `${contributor} not found.` });
  }
}
