import mongoose from "mongoose";

const Schema = mongoose.Schema

export interface Product {
  productId: string,
  quantity: number
}

export interface Order {
  userId: number
  products: Product[]
  amount: number
  address: object
  status: "pending" | "shipping" | "received"
}

const orderSchema = new Schema<Order>({
  userId: { type: Number, required: true },
  products: [{
    productId: { type: String },
    quantity: { type: Number, default: 1 },
  }],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" }
}, {
  timestamps: true
})

export default mongoose.model("Order", orderSchema)