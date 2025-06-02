import config from './config'
import mongoose from 'mongoose'
import app from './app'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`ShopZone Server is running on ${config.port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

server()
