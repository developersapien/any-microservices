import mongoose from "mongoose";

export interface IS3Static {
  url: string;
  uuid: string;
  static_type: string;
}

export interface S3StaticModelDocument extends mongoose.Document {
  url: string;
  uuid: string;
  static_type: string;
}

export interface S3StaticModel extends mongoose.Model<S3StaticModelDocument> {
  build(attrs: IS3Static): S3StaticModelDocument;
}
