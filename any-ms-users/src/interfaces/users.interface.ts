import mongoose from "mongoose";

export interface IUsers {
  uuid: string;
  user_type_id: string;
  sp_code?: string;
  name?: string;
  email: string;
  phone_number?: string;
  country_id?: number;
  language_id?: number;
  currency_id?: number;
  is_active?: boolean;
  last_active?: Date;
  created_at?: Date;
}

export interface UsersDoc extends mongoose.Document {
  uuid: string;
  user_type_id: string;
  sp_code: string;
  name: string;
  email: string;
  phone_number: string;
  country_id: number;
  language_id: number;
  currency_id: number;
  is_active: boolean;
  last_active: Date;
  created_at: Date;
}

export interface UsersModel extends mongoose.Model<UsersDoc> {
  build(attrs: IUsers): UsersDoc;
}
