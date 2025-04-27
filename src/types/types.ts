import "dotenv/config";

type Env = { MONGODB_URI: string; PORT: string };
export const env: Env = {
  MONGODB_URI: process.env.MONGODB_URI || "",
  PORT: process.env.PORT || "",
};

export interface CustomError {
  status: number;
  message: string;
  data: string;
}

export interface Todo {
  text: string;
  completed: boolean;
}

export type params = { id: string };
export type body = { text: string; completed: boolean };
