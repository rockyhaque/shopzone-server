import User from '../user/user.model'
import { ShopResult } from './shop.interface'

const myShop = async (username: string): Promise<ShopResult> => {
  const user = await User.findOne({ username }).select('shops createdAt')

  if (!user) {
    throw new Error('User not found')
  }

  if (!user.shops || user.shops.length === 0) {
    throw new Error('User has no shops')
  }

  return {
    shops: user.shops,
    createdAt: user.createdAt!,
  }
}

export const shopServices = {
  myShop,
}
