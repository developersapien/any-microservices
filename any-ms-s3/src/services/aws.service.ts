import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { BadRequestError } from "@hakanhueriyet/any-util-errors";
import moment from "moment";

const s3StaticEndpoint = new AWS.Endpoint("ams3.digitaloceanspaces.com")
  .hostname;

const s3 = new AWS.S3({
  endpoint: s3StaticEndpoint,
  accessKeyId: process.env.AWS3_ACCESS_KEY,
  secretAccessKey: process.env.AWS3_SECRET_KEY,
});

const MIME_TYPE = {
  "image/png": "image/png",
  "image/jpg": "image/jpg",
  "application/pdf": "application/pdf",
};

const FIELD_NAME = {
  invoices: "invoices",
  statics: "statics",
};

const awsConfig = AWS.config.s3BucketEndpoint;
let date = moment().format("YYYY_MM_DD");

const upload = multer({
  fileFilter: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype] && FIELD_NAME[file.fieldname];
    const error: any = isValid
      ? null
      : new BadRequestError("Invalid MimeType or key");
    cb(error, isValid);
  },
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS3_BUCKET! || "goany-files",
    acl: "public-read",
    key: (request, file, cb) => {
      cb(
        null,
        `${file.fieldname}/${request.currentUser?.id}/${date}/${Date.now()}.${
          file.mimetype.split("/")[1]
        }`
      );
    },
  }),
});

export { upload, awsConfig };
