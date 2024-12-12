import { db } from "~/server/database";
import { tasksTable } from "~/server/database/schema";

export default defineEventHandler(async () => {
  const tasks = await db.select().from(tasksTable);

  return tasks;
});
