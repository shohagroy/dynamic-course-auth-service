import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utlis'

export const createUserToDb = async (user: IUser): Promise<IUser | null> => {
  // auto genetate user id
  const id = await generateUserId()

  user.id = id
  if (!user.password) {
    user.password = config.defaultPassword as string
  }
  const response = await User.create(user)
  return response
}
