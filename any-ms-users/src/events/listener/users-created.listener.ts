import {
  BaseListener,
  Subjects,
  UserCreatedEvent,
} from "@hakanhueriyet/any-util-nats-events";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { userCreationEventService } from "../../services/users-event.service";

export class UserCreatedListener extends BaseListener<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;

  queueGroupName = queueGroupName;

  async onMessage(data: UserCreatedEvent["data"], msg: Message) {
    userCreationEventService(data);
    msg.ack();
  }
}
