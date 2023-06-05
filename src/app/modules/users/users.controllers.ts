import { NextFunction, Request, Response } from 'express'
import { createUserToDb } from './users.services'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const result = await createUserToDb(user)

    res.status(201).json({
      status: 'success',
      message: 'user create successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
