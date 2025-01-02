<template>
  <div
    :class="[
      isCompleted
        ? 'bg-green-100 hover:bg-green-200'
        : 'bg-slate-100 hover:bg-slate-200',
    ]"
    class="task w-full p-6"
  >
    <div
      class="flex items-center gap-2 hover:cursor-pointer"
      :class="{ opened: descriptionOpened }"
      @click="toggleDescription"
    >
      <button
        class="w-8 h-8 border border-black hover:cursor-pointer grid place-items-center"
        @click.stop="toggleCompleted"
      >
        <Icon
          v-if="isCompleted"
          name="mdi-light:check"
          size="1.5rem"
          class="font-bold"
        />
      </button>
      <p class="font-semibold" :class="{ 'line-through': isCompleted }">
        {{ task.name }}
      </p>
      <Icon
        name="mdi-light:chevron-down"
        size="2rem"
        class="ms-auto"
        :class="{ 'rotate-180': descriptionOpened }"
        ref="chevronIcon"
      />
      <button
        @click="deleteTask"
        class="bg-red-700 text-slate-100 font-semibold rounded-lg px-3 py-2 ms-3"
        :data-task-id="task.id"
      >
        Delete task
      </button>
    </div>
    <div class="description mt-4">
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task, DeleteTaskResponse } from "~/types/task";

const props = defineProps<{
  task: Task;
}>();

const isCompleted = ref(props.task.completed);
const descriptionOpened = ref(false);

const toggleCompleted = async () => {
  try {
    await $fetch(`/api/tasks/${props.task.id}`, {
      method: "PUT",
      body: {
        completed: !isCompleted.value,
      } satisfies Partial<Task>,
    });
    isCompleted.value = !isCompleted.value;
  } catch (error) {
    console.log(error);
  }
};

const toggleDescription = () => {
  descriptionOpened.value = !descriptionOpened.value;
};

const deleteTask = async (event: Event) => {
  const { taskId } = (event.target as HTMLButtonElement).dataset;

  try {
    const response = await $fetch<DeleteTaskResponse>(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(response.message);

    (event.target as HTMLButtonElement).closest(".task")?.remove();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped lang="scss">
.description {
  display: none;

  .opened ~ & {
    display: block;
    transition: 0.4s;
  }
}
</style>
