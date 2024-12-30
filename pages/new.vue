<template>
  <div>
    <form action="/api/tasks/create" method="post">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name of the task"
        class="mb-3 border-2 border-gray-300 focus:border-gray-400 p-2 rounded-lg"
      />
      <br />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Brief description"
        class="mb-3 border-2 border-gray-300 focus:border-gray-400 p-2 rounded-lg"
      />
      <br />
      <input type="checkbox" name="completed" id="completed" class="hidden" />
      <button
        type="submit"
        class="bg-green-700 text-slate-100 font-semibold rounded-lg px-3 py-2"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
