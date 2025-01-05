import { db } from "..";

import { usersTable } from "../schema";

const seedUsers = async () => {
  console.log("SEEDING USERS");

  const user: typeof usersTable.$inferInsert = {
    username: "wesnican",
    firstName: "John",
    lastName: "Doe",
    email: "info@info.com",
    password: "12345678",
  };

  await db.insert(usersTable).values([user]);
};

export default seedUsers;
