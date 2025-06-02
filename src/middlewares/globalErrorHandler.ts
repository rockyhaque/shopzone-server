/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { handleZodError } from '../helpers/handleZodError'
import { handleCastError } from '../helpers/handleCastError'
import { handleValidationError } from '../helpers/handleValidationError'
import { handleDuplicateError } from '../helpers/handleDuplicateError'
import { handleGenericError } from '../helpers/handleGenericError'

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.name && err.name === 'ZodError') {
    handleZodError(err, res)
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res)
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res)
  } else if (err?.code && err?.code === 11000) {
    handleDuplicateError(err, res)
  } else if (err instanceof Error) {
    handleGenericError(err, res)
  }
}
