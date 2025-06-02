import { Schema, model } from 'mongoose'
import { IShop } from './shop.interface'

const shopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      required: [true, 'Shop name is required'],
      unique: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Shop = model<IShop>('Shop', shopSchema)
export default Shop
