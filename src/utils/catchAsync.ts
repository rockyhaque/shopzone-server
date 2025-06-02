import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fu: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fu(req, res, next)).catch((error) => next(error))
  }
}


export default catchAsync;