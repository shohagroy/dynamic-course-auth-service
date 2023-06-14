import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next) // Add 'await' here
    } catch (error) {
      next(error)
    }
  }
}

export default catchAsync
