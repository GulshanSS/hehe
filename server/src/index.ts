import express, { Request, Response } from "express";
import dotenv from "dotenv";
import config from "./config";

dotenv.config();

const app = express();

const PORT = config.PORT || 5000;

app.get("/test", (_: Request, res: Response) => {
  return res.json({
    success: true,
    message: "Test Route",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
