import { Model, model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },
    role: {
      type: String,
      default: 'user',
    },
    shops: {
      type: [String],
      validate: [
        {
          validator: (v: string[]) => v.length >= 3,
          message: 'At least 3 shop names are required.',
        },
        {
          // Custom async validator to ensure shop name uniqueness across all users
          validator: async function (shops: string[]) {
            const User = this.constructor as Model<IUser>
            for (const shop of shops) {
              const existing = await User.findOne({ shops: shop })
              if (existing) return false
            }
            return true
          },
          message: 'One or more shop names are already taken.',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
)

//* hashing password
// userSchema.pre('save', async function(next){
//   const user = this;
//   user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
//   next()
// })

// * Alternative way to hash password
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this

  // Hash password only if it's new or modified
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
    )
  }

  next()
})

userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

const User = model<IUser>('User', userSchema)

export default User
