<template>
  <div class="flex flex-col gap-4">
    <Task v-for="task in tasks" :task="task" :key="task.id"></Task>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "~/types/task";

let tasks: Task[] | null;

try {
  const { data, error } = await useFetch("/api/tasks");
  if (error.value) throw new Error(error.value.message);

  console.log(data.value);
  tasks = data.value;
} catch (error) {
  console.error(error);
}
</script>

<style scoped></style>
