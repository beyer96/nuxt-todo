<template>
  <div
    :class="[
      isCompleted
        ? 'bg-green-100 hover:bg-green-200 line-through'
        : 'bg-slate-100 hover:bg-slate-200',
    ]"
    class="rounded-full w-full p-6 hover:cursor-pointer"
    @click="toggleCompleted"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  completed: boolean;
}>();

const isCompleted = ref(props.completed);
const toggleCompleted = () => {
  isCompleted.value = !isCompleted.value;
};
</script>

<style scoped lang="scss"></style>
