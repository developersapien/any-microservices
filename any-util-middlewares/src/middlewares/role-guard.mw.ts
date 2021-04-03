import { Request, Response, NextFunction } from "express";
import {
  NotAuthorizedError,
  BadRequestError,
} from "@hakanhueriyet/any-util-errors";

export const roleGuard = (...roles) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.currentUser?.role)) {
      throw new BadRequestError("Not Allowed role" + req.currentUser?.role);
    }
    next();
  };
};
