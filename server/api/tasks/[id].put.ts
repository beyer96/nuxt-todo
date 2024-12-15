import { eq } from "drizzle-orm";
import { db } from "~/server/database";
import { tasksTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  try {
    const taskId = Number(getRouterParam(event, "id"));
    const body = await readBody(event);

    await db.update(tasksTable).set(body).where(eq(tasksTable.id, taskId));
  } catch (error) {
    console.error(error);
  }
});
