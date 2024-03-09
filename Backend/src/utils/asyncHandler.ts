import { Request, Response, NextFunction, RequestHandler } from "express";

// Define a type for async middleware functions
type AsyncMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

// Function to create async handler for Express middleware
function asyncHandler(fn: AsyncMiddleware): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: any) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
  };
}

export default asyncHandler;
