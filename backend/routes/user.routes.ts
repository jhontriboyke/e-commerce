import express, { Request, Response } from "express"
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken"
import User, { UserProps } from "../models/user.model"

export const router = express.Router()

// GET all users
router.get("/", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  const query = req.query
  try {
    const users = query ? await User.find().sort({ _id: -1 }).limit(5).select("email username isAdmin -_id") : await User.find().select("email username isAdmin -_id")
    return res.status(200).json({ message: "Success", data: users })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// GET user by ID
router.get("/find/:id", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id) as UserProps
    return res.status(200).json({
      message: "User found", data: {
        username: user?.username,
        email: user?.email,
        isAdmin: user?.isAdmin
      }
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// GET user stats
router.get("/stats", verifyTokenAndAdmin, async (req: Request, res: Response) => {
  // only by last year
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          totalUser: { $sum: 1 }
        }
      }
    ])
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id) as UserProps
    return res.status(200).json({
      message: "User has been deleted", data: {
        username: deletedUser.username,
        email: deletedUser.email,
        isAdmin: deletedUser.isAdmin
      }
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

// PUT
router.put("/:id", verifyTokenAndAuthorization, async (req: Request, res: Response) => {
  // const { email, password }: Pick<UserProps, "email" | "password"> = req.body
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    return res.status(200).json(updatedUser)
  } catch (error) {
    return res.status(500).json({ error: error })
  }
})

