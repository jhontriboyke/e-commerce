import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { UserProps } from "../models/user.model";

export interface IUserProps extends Request {
  user?: UserProps
}

export const verifyToken = (req: IUserProps, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "You are not authenticated!" });
  }

  const token = authorization.split(" ")[1];
  const JWT_KEY = process.env.JWT_KEY || "";

  jwt.verify(token, JWT_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }

    req.user = user as UserProps;
    next();
  });
};




export const verifyTokenAndAuthorization = (req: IUserProps, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user?.id === req.params.id || req.user?.isAdmin) {
      next()
    } else {
      res.status(403).json({ message: "You are not allowed to do that" })
    }
  })
}
export const verifyTokenAndAdmin = (req: IUserProps, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    if (req.user?.isAdmin) {
      next()
    } else {
      res.status(403).json({ message: "You are not allowed to do that" })
    }
  })
}

