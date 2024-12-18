import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./schema";

// https://github.com/nuxt/nuxt/issues/29813#issuecomment-2489627738
export const sqlite = new Database("./server/database/development.db");
export const db = drizzle(sqlite, { schema });

export { schema };
