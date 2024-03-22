import mongoose from "mongoose";

const Schema = mongoose.Schema

export interface Product {
  productId: string,
  quantity: number
}

export interface Cart {
  userId: number
  products: Product[]
}

const cartSchema = new Schema<Cart>({
  userId: { type: Number, required: true },
  products: [{
    productId: { type: String },
    quantity: { type: Number, default: 1 },
  }],
}, {
  timestamps: true
})

export default mongoose.model("Cart", cartSchema)