import {
  BasePublisher,
  UserCreatedEvent,
  Subjects,
} from "@hakanhueriyet/any-util-nats-events";

export class UserCreatedPublisher extends BasePublisher<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
  /* TESSTa */
}
