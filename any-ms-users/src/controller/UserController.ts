import { Request, Response } from "express";
import { Users } from "../models";

class UserController {
  static getUsersList = async (req: Request, res: Response) => {
    const users = await Users.find({});
    res.json(users);
  };

  static updateUser = async (req: Request, res: Response) => {};

  static getUserById = async (req: Request, res: Response) => {};

  static changeUserRole = async (req: Request, res: Response) => {};

  static changeUserStatus = async (req: Request, res: Response) => {};
}

export default UserController;
