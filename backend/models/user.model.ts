import mongoose from "mongoose";

const Schema = mongoose.Schema

export interface UserProps {
  username: string
  email: string
  password: string
  isAdmin?: boolean
}

const userSchema = new Schema<UserProps>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.model("User", userSchema)