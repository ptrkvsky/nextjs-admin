import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === `GET`) {
    const { token } = req.query;
    res.status(200).json({ name: `John Doe` });
  }
}
