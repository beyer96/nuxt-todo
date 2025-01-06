import { db } from "..";
import { tasksTable } from "../schema";

const seedTasks = async () => {
  console.log("SEEDING TASKS");

  const tasks: Array<typeof tasksTable.$inferInsert> = [
    {
      name: "Learn Vue.js Fundamentals",
      description: "Master Vue.js core concepts including components, reactivity, and the composition API",
    },
    {
      name: "Build with Nuxt 3",
      description: "Learn Nuxt 3 framework features including routing, data fetching, and server-side rendering",
    },
    {
      name: "Implement Authentication",
      description: "Add user authentication with login/signup flows using Nuxt Auth",
    },
    {
      name: "Create Database Schema",
      description: "Design and implement database schema using Drizzle ORM with proper relationships",
    },
    {
      name: "Add API Endpoints",
      description: "Develop RESTful API endpoints for CRUD operations with proper validation",
    },
    {
      name: "Style with Tailwind CSS",
      description: "Apply responsive styling using Tailwind CSS utility classes and components",
    }
  ];

  await db.insert(tasksTable).values(tasks);
};

export default seedTasks;
