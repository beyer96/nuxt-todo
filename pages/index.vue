<template>
  <Task :text="'Learn Nuxt'" :completed="true"></Task>
</template>

<script setup lang="ts">
try {
  const { data, error } = await useFetch("/api/tasks");
  if (error.value) throw new Error(error.value.message);

  console.log(data.value);
} catch (error) {
  console.error(error);
}
</script>

<style scoped></style>
