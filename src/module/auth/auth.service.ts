import { IUser } from '../user/user.interface'
import User from '../user/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ILoginUser } from './auth.interface'
import config from '../../config'

const register = async (payload: IUser) => {
  const existingUser = await User.findOne({ username: payload.username })
  if (existingUser) {
    throw new Error('Username already exists')
  }
  const result = await User.create(payload)
  return result
}

const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ username: payload.username }).select(
    '+password'
  )

  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordMatch = await bcrypt.compare(payload.password, user.password)
  if (!isPasswordMatch) {
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign(
    {
      id: user?._id,
      name: user?.username,
      role: user?.role,
    },
    config.jwt_secret as string,
    {
      expiresIn: '7d',
    }
  )

  // console.log(token)

  const verifiedUser = {
    username: user?.username,
    role: user?.role,
  }

  return { token, verifiedUser }
}

export const AuthService = {
  register,
  login,
}
