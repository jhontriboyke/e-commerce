import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import { router as userRoutes } from "../routes/user.routes"
import { router as authRoute } from "../routes/auth.routes"
import { router as productRoute } from "../routes/product.routes"
import { router as cartRoute } from "../routes/cart.routes"
import { router as orderRoute } from "../routes/order.routes"

// Define server and configs
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

// Define routes
app.use("/api/auth", authRoute)
app.use("/api/users", userRoutes)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)

// Running server and connecting to MongoDB
const PORT = 8800
const db = mongoose
const dbHost = process.env.MONGO_URI || ''
try {
  db.connect(dbHost)
    .then(() => console.log('Connected to mongoDB'))
    .catch(error => console.log(error))
  app.listen(PORT, () => {
    console.log(`Backend server is running on localhost:${PORT}`)
  })
} catch (error) {
  console.log(error)
}




