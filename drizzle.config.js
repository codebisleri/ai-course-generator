import { config } from "dotenv";
config();

/** @type {import("drizzle-kit").Config} */
export default {
  dialect: "postgresql",
  schema: "./configs/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
