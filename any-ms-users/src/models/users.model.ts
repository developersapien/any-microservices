import mongoose from "mongoose";
import { UsersDoc, IUsers, UsersModel } from "../interfaces/users.interface";
import { v4 as uuid4 } from "uuid";

const usersSchema = new mongoose.Schema({
  uuid: {
    type: String,
    unique: true,
    required: true,
  },
  user_type_id: {
    type: String,
    default: undefined,
  },
  sp_code: String,
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone_number: String,
  country_id: Number,
  language_id: Number,
  currency_id: Number,
  is_active: {
    type: Boolean,
    default: true,
  },
  last_active: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});

usersSchema.statics.build = (attrs: IUsers) => {
  return new Users(attrs);
};

const Users = mongoose.model<UsersDoc, UsersModel>("Users", usersSchema);

export { Users };
