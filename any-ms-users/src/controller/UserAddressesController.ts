import { Request, Response } from "express";
import { UserAddresses } from "../models";

export class UserAddressesController {
  static getUserAddress = async (req: Request, res: Response) => {};

  static setAsDefaultAddress = async (req: Request, res: Response) => {};

  static createUserAddress = async (req: Request, res: Response) => {};

  static updateUserAddress = async (req: Request, res: Response) => {};

  static deleteAddress = async (req: Request, res: Response) => {};
}
