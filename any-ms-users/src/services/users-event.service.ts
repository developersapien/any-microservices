/* Nats Event Publishers or recievers */

import { UserCreatedEvent } from "@hakanhueriyet/any-util-nats-events";
import { Users } from "../models/users.model";
import { getUserTypeId } from "./users.service";

export const userCreationEventService = async (
  data: UserCreatedEvent["data"]
) => {
  const userType = await getUserTypeId({ name: data.role });
  const user = Users.build({
    uuid: data.id,
    user_type_id: userType ? userType?._id : undefined,
    email: data.email,
  });

  await user.save();
};
