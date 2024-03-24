import express, { Request, Response } from "express"
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken"
import Product, { ProductProps } from "../models/product.model"

export const router = express.Router()

// GET all products
router.get("/", async (req: Request, res: Response) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5)
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory]
        }
      })
    } else {
      products = await Product.find()
    }
    return res.status(200).json({ message: "Success", data: products })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// GET product by ID
router.get("/find/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id) as ProductProps
    return res.status(200).json({
      message: "Product found", data: product
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// CREATE
router.post("/", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(200).json({ message: "New product added", data: savedProduct })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    return res.status(200).json(updatedProduct)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})