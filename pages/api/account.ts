// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hiscores } from "oldschooljs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    const resp = await Hiscores.fetch("martusskat");
    res.status(200).json(resp);
  } else res.status(405).json(null);
};
