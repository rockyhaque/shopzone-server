import { Router } from 'express'
import { shopControllers } from './shop.controller'
import auth from '../../middlewares/auth'

const shopRouter = Router()

// shopRouter.get('/my-shop/:username', shopControllers.myShop)
shopRouter.get('/my-shop/:username', auth('user'), shopControllers.myShop)

export default shopRouter
