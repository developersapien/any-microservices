import mongoose from "mongoose";
import { OAuthDoc, OAuthModel, IOAuth } from "../interfaces/oauth.interface";
import { v4 as uuid4 } from "uuid";
import bcrypt from "bcryptjs";
import { BadRequestError } from "@hakanhueriyet/any-util-errors";
import jwt from "jsonwebtoken";

const oauthSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: uuid4 },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["provider", "customer"],
    default: "customer",
  },
});

oauthSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id;
    delete ret.password;
  },
});

// Encrypt Password with bcrypt
oauthSchema.pre("save", async function (done) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(this.get("password"), salt);
  this.set("password", hashed);
  done();
});

oauthSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    {
      id: this.id,
      email: this.email,
      role: this.role,
    },
    process.env.JWT_KEY!
  );
};

// Match User entered password to hashed password in database
oauthSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

oauthSchema.statics.build = (attrs: IOAuth) => {
  return new OAuth(attrs);
};

const OAuth = mongoose.model<OAuthDoc, OAuthModel>("OAuth", oauthSchema);

export { OAuth };
