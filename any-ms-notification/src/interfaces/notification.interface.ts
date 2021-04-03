import mongoose from "mongoose";

type EmailType = "onRegister" | "onForgot" | "onConfirmation" | "onPayment";

export interface INotification {
  uuid: string;
  email: string;
  email_type: EmailType;
  type: string;
  sent_at: Date;
}

export interface NotificationModelDocument extends mongoose.Document {
  uuid: string;
  email: string;
  email_type: EmailType;
  type: string;
  sent_at: Date;
}

export interface NotificationcModel
  extends mongoose.Model<NotificationModelDocument> {
  build(attrs: INotification): NotificationModelDocument;
}
