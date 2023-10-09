import { Response, Request, NextFunction } from "express";

const asyncHandler = (requestHandler: any) => {
  return (res: Response, req: Request, next: NextFunction) => {
    Promise.resolve(requestHandler(res, req)).catch((err: unknown) =>
      next(err)
    );
  };
};

export default asyncHandler;
