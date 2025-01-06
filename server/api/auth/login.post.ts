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
      and(eq(usersTable.username, username), eq(usersTable.password, password))
    );

  if (user[0]) {
    await setUserSession(event, { user: user[0] });

    return {};
  }

  throw createError({
    statusCode: 401,
    message: "Bad credentials",
  });
});
