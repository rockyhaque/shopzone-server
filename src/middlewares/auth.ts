import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '../module/user/user.model'
import config from '../config'

const auth = (...requiredRole: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // * Get token from header without Bearer
    // const token = req.headers.authorization
    // if (!token) {
    //   throw new Error('You are not authorized')
    // }

    // * Get token from header with Bearer
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new Error('You are not authorized')
    }

    if (!authHeader.startsWith('Bearer')) {
      throw new Error('Invalid token format. Use Bearer <token>')
    }

    const token = authHeader.split(' ')[1]

    // Verify the token
    const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload

    const { username, role } = decoded

    const user = await User.findOne({ username })

    if (!user) {
      throw new Error('User not found')
    }

    if (requiredRole && !requiredRole.includes(role)) {
      throw new Error('You are not authorized')
    }

    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
