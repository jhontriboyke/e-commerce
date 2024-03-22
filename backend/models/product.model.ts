import mongoose from "mongoose";

const Schema = mongoose.Schema

export interface Product {
  title: string
  desc: string
  image: string
  categories: string[]
  size: string
  color: string
  price: number
}

const productSchema = new Schema<Product>({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  categories: [{ type: String }],
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },


}, {
  timestamps: true
})

export default mongoose.model("Product", productSchema)