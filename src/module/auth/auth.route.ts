import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from '../user/user.validation'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'

const authRouter = Router()

authRouter.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  AuthController.register
)

authRouter.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.login
)


export default authRouter;