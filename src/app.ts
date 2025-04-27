import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { env, CustomError } from "./types/types";
import todoRoutes from "./routes/todo";

const app = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: `Server is running on port: ${env.PORT}`,
  });
});

app.use("/todo", todoRoutes);

//Error handling middleware
app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    const status = error.status;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  }
);

// 404 error handling middleware
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

// Connect to MongoDB and start the server
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
