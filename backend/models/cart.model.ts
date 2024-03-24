import mongoose from "mongoose";

const Schema = mongoose.Schema

export interface ProductCartProps {
  productId: string,
  quantity: number
}

export interface CartProps {
  userId: number
  products: ProductCartProps[]
}

const cartSchema = new Schema<CartProps>({
  userId: { type: Number, required: true },
  products: [{
    productId: { type: String },
    quantity: { type: Number, default: 1 },
  }],
}, {
  timestamps: true
})

export default mongoose.model("Cart", cartSchema)