/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // console.log(err.statusCode);

  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
    stack: config.NODE_ENV === "development" ? err.stack : {},
  });
};

export default globalErrorHandler;
