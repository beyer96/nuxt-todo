import { z } from "zod";
import { db } from "~/server/database";
import { usersTable } from "~/server/database/schema";

const bodySchema = z.object({
  username: z.string(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string()
});

export default defineEventHandler(async (event) => {
  const { username, password, passwordConfirmation, email, firstName, lastName } = await readValidatedBody(
    event,
    bodySchema.parse
  );

  if (password !== passwordConfirmation) {
    throw createError({
      statusCode: 400,
      message: "Passwords do not match",
    });
  }

  const hashedPassword = await hashPassword(password);

  const user: typeof usersTable.$inferInsert = {
    username,
    password: hashedPassword,
    email,
    firstName,
    lastName,
  };

  await db.insert(usersTable).values([user]);
  await setUserSession(event, { user });

  return {};
});
