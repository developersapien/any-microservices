import { Request, Response, NextFunction } from "express";
import { S3Static } from "../models/s3-static.models";

export class S3Controller {
  static uploadFile = async (req: Request, res: Response) => {
    if (req && req.currentUser) {
      const statics = S3Static.build({
        uuid: req.currentUser?.id,
        url: req["file"]["location"],
        static_type: "sdsds",
      });
      await statics.save();
      res.status(200).send({ success: true });
    }
  };

  static getUserFiles = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userFiles = await S3Static.find({ uuid: id });
    res.json(userFiles);
  };
}

export default S3Controller;
