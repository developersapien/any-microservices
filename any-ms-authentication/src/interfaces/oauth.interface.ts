import mongoose from "mongoose";

export interface IOAuth {
  email: string;
  password: string;
  role: string;
}

export interface OAuthModelDocument extends mongoose.Document {
  email: string;
  password: string;
  role: string;
}

interface IOAuthMethods extends OAuthModelDocument {
  getSignedJwtToken(): string;
  matchPassword(password: string): Promise<any>;
}

export interface OAuthDoc extends IOAuthMethods {}

export interface OAuthModel extends mongoose.Model<OAuthDoc> {
  build(attrs: IOAuth): OAuthDoc;
}
