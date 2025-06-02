import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { userServices } from './user.service'

const getUsers = catchAsync(async (req, res) => {
  const result = await userServices.getUsers()
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User getting succesfully',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const result = await userServices.getSingleUser(userId)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Single User getting succesfully',
    data: result,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const result = await userServices.updateUser(userId, body)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User updated succesfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  await userServices.deleteUser(userId)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User deleted succesfully',
    data: {},
  })
})

const blockUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  await userServices.blockUser(userId);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User blocked successfully',
    // data: {},
  })
})

export const UserControllers = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  blockUser
}
