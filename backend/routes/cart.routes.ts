import express, { Request, Response } from "express"
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken"
import Cart, { CartProps } from "../models/cart.model"

export const router = express.Router()

// GET ALL
router.get("/", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const carts = await Cart.find()
    return res.status(200).json({ message: "Success", data: carts })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// GET USER CART by userId
router.get("/find/:id", verifyTokenAndAuthorization, async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id })
    return res.status(200).json({
      message: "Product found", data: cart
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// CREATE
router.post("/", verifyToken, async (req: Request, res: Response) => {
  const newCart = new Cart(req.body)

  try {
    const savedCard = await newCart.save()
    res.status(200).json({ message: "New product added", data: savedCard })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req: Request, res: Response) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    return res.status(200).json(updatedCart)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req: Request, res: Response) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id) as CartProps
    return res.status(200).json({
      message: "User has been deleted", data: deletedCart
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})