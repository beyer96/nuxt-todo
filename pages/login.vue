<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login">
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        v-model="credentials.username"
        type="text"
        placeholder="Username"
      />
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        v-model="credentials.password"
        type="password"
        placeholder="Password"
      />
      <button class="bg-blue-500 text-white p-2 rounded-md" type="submit">
        Login
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { fetch: refreshSession } = useUserSession();
const credentials = reactive({
  username: "",
  password: "",
});

const login = async () => {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: credentials,
    });
    await refreshSession();
    await navigateTo("/");
  } catch (error) {
    alert("Bad credentials");
  }
};
</script>
