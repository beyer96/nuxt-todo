import { eq } from "drizzle-orm";
import { db } from "~/server/database";
import { tasksTable } from "~/server/database/schema";
import { DeleteTaskResponse } from "~/types/task";

export default defineEventHandler(
  async (event): Promise<DeleteTaskResponse> => {
    try {
      const taskId = Number(getRouterParam(event, "id"));

      // If taskId is invalid or not found
      if (isNaN(taskId) || taskId <= 0) {
        return {
          ok: false,
          status: "error",
          statusCode: 400,
          message: "Invalid or missing task ID",
        };
      }

      // Perform the task deletion
      const result = await db
        .delete(tasksTable)
        .where(eq(tasksTable.id, taskId))
        .returning({ deletedId: tasksTable.id });

      // If no task was deleted (e.g., task not found)
      if (!result.length) {
        return {
          ok: false,
          status: "error",
          statusCode: 404,
          message: `Task with ID ${taskId} not found.`,
        };
      }

      // Successful deletion response
      return {
        ok: true,
        status: "ok",
        statusCode: 200,
        message: "Task successfully deleted",
        data: { taskId }, // Include the deleted taskId or other relevant data
      };
    } catch (error: any) {
      console.error("Error deleting task:", error);

      // Return generic server error response
      return {
        ok: false,
        status: "error",
        statusCode: 500,
        message: "Internal server error. Please try again later.",
        error: error.message, // Provide the error message (or sensitive details if appropriate)
      };
    }
  }
);
