import { Response } from 'express'

type IApiReponse<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T | null
}

const sendResponse = <T>(res: Response, payload: IApiReponse<T>): void => {
  const { statusCode, message, data, success } = payload

  res.status(statusCode).json({ success, message, data })
}

export default sendResponse
