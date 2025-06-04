import cookieParser from 'cookie-parser';
import cors from 'cors'
import express, { Request, Response } from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import userRouter from './module/user/user.route'
import authRouter from './module/auth/auth.route'
import shopRouter from './module/shop/shop.route'

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173','http://shopzone.local:5173', 'https://shopzone-teal.vercel.app'] ,credentials:true}))
// app.use(cors({ origin: '*' }));


app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/shop', shopRouter)


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
