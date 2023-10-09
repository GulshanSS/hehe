import { Response } from "express";
import { ApiError } from "../utils/ApiError";
import { HttpCode } from "../utils/Constants";

class ErrorHandler {
  private isTrustedError(err: Error) {
    if (err instanceof ApiError) {
      return err.isOperational;
    }
    return false;
  }

  private handleTrustedError(error: ApiError, res: Response): Response {
    if (Object.keys(error.errors).length !== 0) {
      return res.status(error.statusCode).json({
        success: false,
        errors: error.errors,
      });
    }
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  private handleCriticalError(
    error: Error | ApiError,
    res?: Response
  ): Response {
    if (res) {
      return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
        stack: error.stack || "",
      });
    }
    console.error("Application encountered a critical error. Exiting");
    process.exit(1);
  }

  public handleError(err: Error | ApiError, res?: Response): void {
    if (this.isTrustedError(err) && res) {
      this.handleTrustedError(err as ApiError, res);
    } else {
      this.handleCriticalError(err, res);
    }
  }
}

export const errorHandler = new ErrorHandler();
