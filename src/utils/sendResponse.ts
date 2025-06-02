import { Response } from 'express'

type TSuccessResponse<T> = {
  success?: boolean
  statusCode: number
  message: string
  token?: string
  data?: T | T[] | null
}

const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data.statusCode).send({
    success: true,
    statusCode: data.statusCode,
    message: data.message,
    token: data.token,
    data: data.data,
  })
}

export default sendResponse
