import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import { env } from "./types/types";
import todoRoutes from "./routes/todo";
import userRoutes from "./routes/user";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server is running on port: ${env.PORT}`,
  });
});

app.use("/todo", todoRoutes);
app.use("/user", userRoutes);

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
