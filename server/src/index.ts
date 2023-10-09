import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import config from "./config";
import authRoutes from "./routes/auth.route";
import passport from "passport";
import session from "express-session";
import errorMiddlerware from "./middlewares/error.middleware";

const app = express();

const PORT = config.PORT || 5000;

app.use(express.json());

app.use(
  session({
    secret: config.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/test", (_: Request, res: Response) => {
  return res.json({
    success: true,
    message: "Test Route",
  });
});

app.use("/api/v1/auth", authRoutes);

app.use(errorMiddlerware);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
