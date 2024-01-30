// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type ModelProps = {
  customer_id: string,
  server_name: string,
  server_type: string
}

type ModelListProps = Array<ModelProps>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ModelListProps>
) {
  res.status(200).json([
    {
      "customer_id": "user1",
      "server_name": "server7",
      "server_type": "vds"
    },
    {
      "customer_id": "user5",
      "server_name": "server2",
      "server_type": "dedicated"
    },
    {
      "customer_id": "user3",
      "server_name": "server4",
      "server_type": "hosting"
    }
  ])
}
