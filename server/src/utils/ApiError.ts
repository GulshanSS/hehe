import { HttpCode } from "./Constants";

interface ApiErrorArgs {
  name?: string;
  statusCode: HttpCode;
  message: string;
  errors?: Object;
  isOperational?: boolean;
}

class ApiError extends Error {
  public readonly name: string;
  public readonly statusCode: HttpCode;
  public readonly errors: Object = {};
  public readonly isOperational: boolean = true;

  constructor(args: ApiErrorArgs) {
    super(args.message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = args.name || "Error";
    this.statusCode = args.statusCode;
    if (args.isOperational !== undefined) { 
      args.isOperational = args.isOperational;
    }
    if (args.errors !== undefined) {
      this.errors = args.errors;
    }
    Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };
