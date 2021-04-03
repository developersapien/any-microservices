import mongoose from "mongoose";

export interface IUserType {
  name: string;
  is_active: boolean;
}

export interface UserTypeDoc extends mongoose.Document {
  name: string;
  is_active: boolean;
}

export interface UserTypeModel extends mongoose.Model<UserTypeDoc> {
  build(attrs: IUserType): UserTypeDoc;
}
