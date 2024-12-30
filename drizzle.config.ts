import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./server/database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "file:./server/database/development.db",
  },
  verbose: true,
  strict: true,
});
