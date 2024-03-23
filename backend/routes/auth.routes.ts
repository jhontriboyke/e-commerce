import express, { Request, Response } from "express"
import User, { UserProps } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

interface IUserProps extends UserProps {
  _id?: string
}

export const router = express.Router()


// REGISTER
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password, isAdmin }: IUserProps = req.body

  if (!email || !password) {
    return res.status(404).json({ error: "Email dan atau password diperlukan" })
  }

  const salt = await bcrypt.genSalt(8)
  const hashedPassword = await bcrypt.hash(password, salt)

  const SECRET_KEY = process.env.JWT_KEY || ""
  const token = jwt.sign({
    username: username,
    email: email,
    isAdmin: isAdmin,
  }, SECRET_KEY, { expiresIn: "3d" })

  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
    isAdmin: isAdmin,
  })

  try {
    const { username, email, isAdmin } = await newUser.save()

    res.status(201).json({ username, email, isAdmin, token });
  } catch (error) {
    res.status(500).json(error)
  }

})


// LOGIN
router.post('/login', async (req: Request, res: Response) => {
  const { email, password }: Pick<IUserProps, "email" | "password"> = req.body
  if (!email || !password) {
    res.status(400).json({ error: "All field must be filled" })
  }
  try {
    const user: IUserProps | null = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Password incorrect" });
    } else {
      const { _id, username, email, isAdmin } = user;
      const JWT_KEY = process.env.JWT_KEY || ""
      const token = jwt.sign({
        id: _id,
        isAdmin: isAdmin
      }, JWT_KEY, { expiresIn: "3d" })
      return res.status(200).json({ _id, username, email, isAdmin, token });
    }

  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
})
