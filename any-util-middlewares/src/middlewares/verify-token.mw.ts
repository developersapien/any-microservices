import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  BadRequestError,
  NotAuthorizedError,
} from "@hakanhueriyet/any-util-errors";

declare global {
  namespace Express {
    interface Request {
      currentUser?: {
        id: string;
        email: string;
        role: string;
      };
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* Get Auth Header Value */
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader === "undefined") {
    return next();
  }

  try {
    const bearer = bearerHeader.split(" ");
    const payload = jwt.verify(bearer[1], process.env.JWT_KEY!) as {
      id: string;
      email: string;
      role: string;
    };
    req.currentUser = payload;
  } catch (err) {
    throw new BadRequestError("Token not verified!");
  }
  next();
};
