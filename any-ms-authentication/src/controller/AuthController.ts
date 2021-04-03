import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import mongoose from "mongoose";

import { BadRequestError } from "@hakanhueriyet/any-util-errors";
import { natsWrapper } from "@hakanhueriyet/any-utils-nats-wrapper";

import { UserCreatedPublisher } from "../events/publishers/user-created.publisher";
import { OAuth } from "../models/oauth.model";
import { getOne } from "../services/oauth.service";
import { SendActivaionEmailPublisher } from "../events/publishers/send-activation-email.publisher";

class AuthController {
  static getLoggedUser = async (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  };

  static signIn = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;
    const signedInUser = await OAuth.findOne({ email }).select("+password");
    if (!signedInUser) {
      throw new BadRequestError("Invalid Credentials");
    }

    const isMatch = await signedInUser.matchPassword(password);
    if (isMatch) {
      const token = signedInUser.getSignedJwtToken();
      res.status(200).send({ success: true, token: token });
    } else {
      throw new BadRequestError("Invalid Credentials");
    }
  };

  static signUp = async (req: Request, res: Response) => {
    const { email, password, role } = req.body;
    const getExistUser = await getOne({ email });
    if (getExistUser) {
      throw new BadRequestError("User Exist");
    }
    const user = OAuth.build({ email, password, role });
    await user.save();
    new UserCreatedPublisher(natsWrapper.client).publish({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    new SendActivaionEmailPublisher(natsWrapper.client).publish({
      email: user.email,
    });
    const token = user.getSignedJwtToken();
    req.session = {
      jwt: token,
    };
    res.status(200).send({ success: true, token: token });
  };

  static signOut = async (req: Request, res: Response) => {
    req.currentUser = undefined;
    req.session = null;
    res.json({ success: true });
  };
}

export default AuthController;
