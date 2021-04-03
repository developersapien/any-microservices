import mongoose from "mongoose";
import { IUserType, UserTypeDoc, UserTypeModel } from "../interfaces/";

const userTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

userTypeSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
  },
});

userTypeSchema.statics.build = (attrs: IUserType) => {
  return new UserType(attrs);
};

const UserType = mongoose.model<UserTypeDoc, UserTypeModel>(
  "UserType",
  userTypeSchema
);
export { UserType };
