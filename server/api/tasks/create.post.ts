import { db } from "~/server/database";
import { tasksTable } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    await db.insert(tasksTable).values(body);

    await sendRedirect(event, "/", 201);
  } catch (error) {
    console.error(error);
  }
});
