import mongoose from "mongoose";
import {
  IS3Static,
  S3StaticModelDocument,
  S3StaticModel,
} from "../interfaces/s3-static.interface";

const s3staticSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
  },
  static_type: {
    type: String,
    required: true,
  },
});

s3staticSchema.statics.build = (attrs: IS3Static) => {
  return new S3Static(attrs);
};

const S3Static = mongoose.model<S3StaticModelDocument, S3StaticModel>(
  "S3Static",
  s3staticSchema
);

export { S3Static };
