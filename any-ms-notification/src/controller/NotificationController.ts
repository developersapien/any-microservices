import { Request, Response } from "express";

class NotificationController {
  static sendMail = async (req: Request, res: Response) => {
    res.send(req.currentUser);
  };

  static sendOnRegister = async (req: Request, res: Response) => {};

  static sendOnForget = async (req: Request, res: Response) => {};
}

export default NotificationController;
