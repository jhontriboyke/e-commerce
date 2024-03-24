import mongoose, { Schema, Document } from "mongoose";

export interface Product {
  productId: string;
  quantity: number;
}

export interface AddressProps {
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface OrderProps extends Document {
  userId: string;
  products: Product[];
  amount: number;
  address: AddressProps; // Mengubah type menjadi AddressProps
  status: "pending" | "shipping" | "received";
}

const orderSchema = new Schema<OrderProps>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<OrderProps>("Order", orderSchema);
