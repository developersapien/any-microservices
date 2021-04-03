import { Router, Request } from "express";
import UploadToS3 from "../controller/s3-static.controller";
import { upload } from "../services/aws.service";
import { authGuard } from "@hakanhueriyet/any-util-middlewares";
import S3Controller from "../controller/s3-static.controller";

const router = Router();

router.post(
  "/files/upload",
  authGuard,
  upload.single("invoices"),
  S3Controller.uploadFile
);

router.get("/files/:id", authGuard, S3Controller.getUserFiles);

export { router as S3Routes };
