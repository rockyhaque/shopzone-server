import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '../module/user/user.model'
import config from '../config'

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
 
    const token = req.headers.authorization
    if (!token) {
      throw new Error('You are not authorized')
    }

    // Verify the token
    const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload

    const { username } = decoded

    const user = await User.findOne({ username })

    if (!user) {
      throw new Error('User not found')
    }

    req.user = decoded as JwtPayload

    next()
  })
}

export default auth
