import express, { Request, Response } from "express"
import User, { UserProps } from "../models/user.model"
import bcrypt from "bcrypt"

export const router = express.Router()

// REGISTER
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password, isAdmin }: UserProps = req.body

  const salt = await bcrypt.genSalt(8)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
    isAdmin: isAdmin,
  })

  try {
    const { username, email } = await newUser.save()
    res.status(201).json({ message: "Register Success", data: { username, email } });
  } catch (error) {
    res.status(500).json(error)
  }

})


// LOGIN
router.post('/login', async (req: Request, res: Response) => {
  const { email, password }: Pick<UserProps, "email" | "password"> = req.body
  if (!email || !password) {
    res.status(400).json({ error: "All field must be filled" })
  }
  try {
    const user: UserProps | null = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Incorrect email or password" });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ error: "Incorrect email or password" });
      } else {
        const { username, email } = user;
        return res.status(200).json({ message: "Login Success", data: { username, email } });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
})
