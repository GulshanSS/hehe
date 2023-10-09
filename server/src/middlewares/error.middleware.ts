import { Response, Request, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { errorHandler } from "../exceptions/ErrorHandler";

const errorMiddlerware = (
  error: Error | ApiError,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  errorHandler.handleError(error, res);
};

export default errorMiddlerware;
