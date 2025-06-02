import { Router } from 'express'
import { shopControllers } from './shop.controller'
import auth from '../../middlewares/auth'

const shopRouter = Router()

shopRouter.get('/my-shop/:username', auth(), shopControllers.myShop)

export default shopRouter
