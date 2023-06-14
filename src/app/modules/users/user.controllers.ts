import { NextFunction, Request, Response } from 'express'
import catchAsuncFn from '../../../shared/catchAsync'
import { createUserToDb } from './user.services'

export const createUser = catchAsuncFn(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await createUserToDb(user)

    next()

    res.status(201).json({
      status: 'success',
      message: 'user create successfully',
      data: result,
    })
  }
)
