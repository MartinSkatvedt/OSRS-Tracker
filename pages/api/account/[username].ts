// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hiscores } from "oldschooljs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "GET") {
    let resp;
    const { username } = req.query;
    if (typeof username == "string") resp = await Hiscores.fetch(username);
    else resp = await Hiscores.fetch(username[0]);
    res.status(200).json(resp);
  } else res.status(405).json(null);
};
