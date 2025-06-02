/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const handleZodError = (err: any, res: Response) => {
  const issues = err.errors.map((val: any) => {
    return { path: val.path.join(' '), message: val.message }
  })

  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: err.message,
    issues: issues,
    error: err,
  })
}
