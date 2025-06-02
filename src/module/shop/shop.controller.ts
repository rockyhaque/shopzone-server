import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { shopServices } from './shop.service'

const myShop = catchAsync(async (req, res) => {
  const username = req.params.username
  const result = await shopServices.myShop(username)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'My shops retrieved succesfully',
    data: result,
  })
})

export const shopControllers = {
  myShop,
}
