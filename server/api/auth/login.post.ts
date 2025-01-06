import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/server/database";
import { usersTable } from "~/server/database/schema";

const bodySchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { username, password } = await readValidatedBody(
    event,
    bodySchema.parse
  );
  let user = await db
    .select()
    .from(usersTable)
    .where(
      and(eq(usersTable.username, username))
    );

  if (!user[0] || !verifyPassword(password, user[0].password)) {
    throw createError({
      statusCode: 401,
      message: "Bad credentials",
    });
  }

  await setUserSession(event, { user: user[0] });

  return {};
});
