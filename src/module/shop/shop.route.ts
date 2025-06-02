import { Router } from 'express'
import { shopControllers } from './shop.controller'

const shopRouter = Router()

shopRouter.get('/my-shop/:username', shopControllers.myShop)

export default shopRouter
