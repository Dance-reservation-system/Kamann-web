import { AxiosError } from "axios";

export class ApiError extends AxiosError {
  status: number;
  code: string;
  message: string;
  timestamp: string;

  constructor(
    status: number,
    code: string,
    message: string,
    timestamp: string,
  ) {
    super();
    this.status = status;
    this.code = code;
    this.message = message;
    this.timestamp = timestamp;
  }
}
