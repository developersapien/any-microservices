import "express-async-errors";

import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler, verifyToken } from "@hakanhueriyet/any-util-middlewares";
import { S3Routes } from "./routes/s3-static.routes";

const app = express();

app.set("trust proxy", true);
app.use(cors());
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(verifyToken);
app.use("/v1/static", S3Routes);
app.use(errorHandler);

export { app };
