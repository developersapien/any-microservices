import "express-async-errors";

import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler, verifyToken } from "@hakanhueriyet/any-util-middlewares";
import { usersRouter } from "./routes/users.routes";

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
app.use(verifyToken);
app.use("/v1/users", usersRouter);
app.use(errorHandler);

export { app };
