import mongoose from "mongoose";
import {
  IUserAddresses,
  UserAddressesDoc,
  UserAddressesModel,
} from "../interfaces";

const userAddressesSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city_id: {
    type: Number,
    default: 0,
  },
  floor: {
    type: Number,
    default: 0,
  },
  apartment: {
    type: String,
    default: null,
  },
  is_default: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

userAddressesSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
  },
});

userAddressesSchema.statics.build = (attrs: IUserAddresses) => {
  return new UserAddresses(attrs);
};

const UserAddresses = mongoose.model<UserAddressesDoc, UserAddressesModel>(
  "UserAddresses",
  userAddressesSchema
);
export { UserAddresses };
