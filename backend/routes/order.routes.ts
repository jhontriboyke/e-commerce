import express, { Request, Response } from "express"
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken"
import Order, { OrderProps } from "../models/order.model"

export const router = express.Router()

// GET ALL
router.get("/", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
    return res.status(200).json({ message: "Success", data: orders })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// GET USER CART by userId
router.get("/find/:id", verifyTokenAndAuthorization, async (req: Request, res: Response) => {
  try {
    const orders = await Order.findOne({ userId: req.params.id })
    return res.status(200).json({
      message: "Product found", data: orders
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// CREATE
router.post("/", verifyToken, async (req: Request, res: Response) => {
  const { address } = req.body
  const newOrder = new Order(req.body)

  try {
    if (typeof address !== "object") {
      return res.status(400).json({ message: "Address must be an object" })
    }
    const savedOrder = await newOrder.save()
    res.status(200).json({ message: "New orders added", data: savedOrder })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    return res.status(200).json(updatedOrder)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id) as OrderProps
    return res.status(200).json({
      message: "User has been deleted", data: deletedOrder
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// GET MONTHLY INCOMES
router.get("/income", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount"
        }
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" }
        }
      }
    ])
    return res.status(200).json(income)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})