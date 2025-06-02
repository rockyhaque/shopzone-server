import express, { Request, Response } from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import userRouter from './module/user/user.route'
import authRouter from './module/auth/auth.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)

app.use('/api/admin/users', userRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'ShopZone Server is running 🥰',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

export default app
