import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const delay = (ms: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const data: Data = req.body
  await delay(2000)
  res.status(200).json(data)
}

export default handler
