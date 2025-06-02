export interface IUser {
  username: string
  password: string
  role?: string
  shops: string[]
  createdAt?: Date
  updatedAt?: Date
}
