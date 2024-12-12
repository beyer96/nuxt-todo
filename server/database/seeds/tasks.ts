import { db } from "..";
import { tasksTable } from "../schema";

const seedTasks = async () => {
  console.log("SEEDING TASKS");

  const task1: typeof tasksTable.$inferInsert = {
    name: "Learn Vue",
    description: "First step to learn Nuxt afterwards!",
  };
  const task2: typeof tasksTable.$inferInsert = {
    name: "Learn Nuxt",
    description:
      "After learning this shit, you can go to hackathon without worries! :D",
  };

  await db.insert(tasksTable).values([task1, task2]);
};

export default seedTasks;
