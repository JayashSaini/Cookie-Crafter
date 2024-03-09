import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError.js";

// Global error handling middleware
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    // If the error is an instance of ApiError, handle it accordingly
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    // Handle other types of errors
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
