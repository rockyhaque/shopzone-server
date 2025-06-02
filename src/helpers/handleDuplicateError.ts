/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const handleDuplicateError = (err: any, res: Response) => {
  res.status(StatusCodes.CONFLICT).json({
    success: false,
    message: err?.message,
    error: err,
  })
}



  //! Alterantive way to handle duplicate key error

  // else if (err.code && err.code === 11000) {
  //   const keyValue = err.keyValue || err.error?.keyValue
  //   const duplicateField = Object.keys(keyValue || {}).join(', ')
  //   const duplicateValue = Object.values(keyValue || {}).join(', ')
  //   res.status(StatusCodes.BAD_REQUEST).json({
  //     success: false,
  //     message: `Duplicate value detected for field: '${duplicateField}' with value: '${duplicateValue}'. Please use a unique value.`,
  //     error: err,
  //   })
  // }