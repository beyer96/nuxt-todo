<template>
  <div class="flex flex-col gap-4">
    <div class="buttons text-end">
      <RouterLink
        to="/new"
        class="bg-green-700 text-slate-100 font-semibold rounded-lg px-3 py-2"
      >
        Create task
      </RouterLink>
    </div>
    <Task v-for="task in tasks" :task="task" :key="task.id"></Task>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "~/types/task";

let tasks: Task[] | null;

try {
  const { data, error } = await useFetch("/api/tasks");
  if (error.value) throw new Error(error.value.message);

  tasks = data.value;
} catch (error) {
  console.error(error);
}
</script>

<style scoped></style>
