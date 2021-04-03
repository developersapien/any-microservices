import { Request, Response } from "express";
import { UserType } from "../models";

export class UserTypeController {
  static createUserType = async (req: Request, res: Response) => {
    const { name, is_active } = req.body;
    const userType = UserType.build({
      name,
      is_active,
    });

    await userType.save();

    res.status(200).send({ success: true, userType });
  };

  static getUserTypes = async (req: Request, res: Response) => {};

  static getTypeById = async (req: Request, res: Response) => {};

  static deleteUserType = async (req: Request, res: Response) => {};

  static updateUserType = async (req: Request, res: Response) => {};

  static activateUserType = async (req: Request, res: Response) => {};
}

export default UserTypeController;
