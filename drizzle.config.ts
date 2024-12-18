import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./server/database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    // https://github.com/nuxt/nuxt/issues/29813#issuecomment-2489627738
    url: "file:./server/database/development.db",
  },
  verbose: true,
  strict: true,
});
