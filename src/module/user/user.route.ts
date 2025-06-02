import { Router } from 'express'
import { UserControllers } from './user.controller'

const userRouter = Router()

userRouter.get('/:userId', UserControllers.getSingleUser)
userRouter.put('/:userId', UserControllers.updateUser)
userRouter.delete('/:userId', UserControllers.deleteUser)
userRouter.get('/', UserControllers.getUsers)

export default userRouter;