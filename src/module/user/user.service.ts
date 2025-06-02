import { IUser } from './user.interface'
import User from './user.model'

const getUsers = async () => {
  const result = await User.find()
  return result
}

const getSingleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}

const updateUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id)
  return result
}

export const userServices = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
