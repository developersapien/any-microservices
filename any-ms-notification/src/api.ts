import "express-async-errors";

import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "@hakanhueriyet/any-util-middlewares";
import { notificationRouter } from "./routes/notification.routes";

const app = express();

app.set("trust proxy", true);
app.use(helmet());
app.use(cors());
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use("/v1/notification", notificationRouter);
app.use(errorHandler);

export { app };
