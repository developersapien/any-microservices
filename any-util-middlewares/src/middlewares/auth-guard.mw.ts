import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "@hakanhueriyet/any-util-errors";

export const authGuard = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
