import { Subjects } from "./subjects";

export interface SendActivationEmailEvent {
  subject: Subjects.SendActivationMail;
  data: {
    email: string;
  };
}
