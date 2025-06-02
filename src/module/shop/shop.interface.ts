import { Types } from 'mongoose'

export interface IShop {
  name: string
  owner: Types.ObjectId 
}

export interface ShopResult {
  shops: string[];
  createdAt: Date;
}