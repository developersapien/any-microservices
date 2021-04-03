import { HttpException } from "./http-exception";

export class BadRequestError extends HttpException {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message, status: this.statusCode }];
  }
}
