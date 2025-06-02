/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'

export const handleValidationError = (err: any, res: Response) => {
  const issues = Object.values(err.errors).map((val: any) => {
    return {
      path: val.path,
      message: val.message,
    }
  })

  res
    .status(400)
    .json({ success: false, message: err.message, issues: issues, error: err })
}
