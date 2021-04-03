import {
  BaseListener,
  Subjects,
  UserCreatedEvent,
} from "@hakanhueriyet/any-util-nats-events";
import { Message } from "node-nats-streaming";

export class UserCreatedListener extends BaseListener<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
  queueGroupName = "user-service";

  onMessage(data: UserCreatedEvent["data"], msg: Message) {
    console.log("Update Databsae from this event", data.id);
    msg.ack();
  }
}
