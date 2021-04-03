import mongoose from "mongoose";

export interface IUserAddresses {
  uuid: string;
  name: string;
  street: string;
  street_number: string;
  city_id: number;
  floor: number;
  apartment: string;
  comments: string;
  is_default: number;
  created_at: Date;
}

export interface UserAddressesDoc extends mongoose.Document {
  uuid: string;
  name: string;
  street: string;
  street_number: string;
  city_id: number;
  floor: number;
  apartment: string;
  comments: string;
  is_default: number;
  created_at: Date;
}

export interface UserAddressesModel extends mongoose.Model<UserAddressesDoc> {
  build(attrs: IUserAddresses): UserAddressesDoc;
}
