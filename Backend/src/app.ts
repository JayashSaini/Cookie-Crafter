import ApiError from "./utils/apiError.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import express, { Request, Response } from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);

export { app };
