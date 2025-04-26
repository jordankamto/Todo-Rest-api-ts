import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { env } from "./types/types";

const app = express();

mongoose
  .connect(env.MONGODB_URI)
  .then((result) => {
    app.listen(env.PORT, () => {
      console.log(`Server is running on ${result.connection.host}:${env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
