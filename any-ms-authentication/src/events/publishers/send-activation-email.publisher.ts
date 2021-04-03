import {
  BasePublisher,
  SendActivationEmailEvent,
  Subjects,
} from "@hakanhueriyet/any-util-nats-events";

export class SendActivaionEmailPublisher extends BasePublisher<
  SendActivationEmailEvent
> {
  readonly subject = Subjects.SendActivationMail;
}
