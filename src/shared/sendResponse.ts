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
  // const { statusCode, message, data, success, meta } = payload

  const responseData: IApiReponse<T> = {
    statusCode: payload.statusCode,
    success: payload.success,
    message: payload.message,
    meta: payload.meta || null || undefined,
    data: payload.data || null,
  }

  res.status(responseData.statusCode).json(responseData)
}

export default sendResponse
