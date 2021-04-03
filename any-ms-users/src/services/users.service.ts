import { UserType } from "../models/user-type.model";
import { IUserType } from "../interfaces/users-type.interface";

const getAllUserType = async () => {
  return await UserType.find({});
};

const getUserTypeId = async (type: Partial<IUserType>) => {
  return await UserType.findOne({ name: type.name });
};

const findUserTypeById = async (_id: string) => {
  return await UserType.findById(_id);
};

export { getAllUserType, getUserTypeId, findUserTypeById };
