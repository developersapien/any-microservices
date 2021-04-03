// for client creation
import nats from "node-nats-streaming";
import { UserCreatedPublisher } from "./user-createad-publisher";

console.clear();
const stan = nats.connect("goany", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  try {
  } catch (error) {
    console.error(error);
  }

  /* const newUser = JSON.stringify({
    id: "1231-13231-12131-21213",
    title: "new user created",
    iat: 145645789,
  });

  stan.publish("user:created", newUser, () => {
    console.log("event published");
  }); */
});
