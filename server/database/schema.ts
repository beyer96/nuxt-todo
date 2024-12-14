import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tasksTable = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  completed: integer({ mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
});
