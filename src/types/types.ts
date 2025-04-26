import "dotenv/config";

type Env = { MONGODB_URI: string; PORT: string };
export const env: Env = {
  MONGODB_URI: process.env.MONGODB_URI || "",
  PORT: process.env.PORT || "",
};
