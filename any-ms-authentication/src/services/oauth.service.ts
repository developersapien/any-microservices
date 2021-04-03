/* core business logic for user authentication and management */
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { OAuth } from "../models/oauth.model";

const getAll = async () => {
  return await OAuth.find({});
};

const getById = async (id: string) => {
  return await OAuth.findById("9bcb08f6-6766-4127-9e4b-033f57e79c38");
};

const getOne = async (data: any) => {
  return await OAuth.findOne(data);
};

export { getAll, getById, getOne };
