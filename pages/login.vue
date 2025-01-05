<template>
  <form @submit.prevent="login">
    <input v-model="credentials.username" type="text" placeholder="Username" />
    <input
      v-model="credentials.password"
      type="password"
      placeholder="Password"
    />
    <button type="submit">Login</button>
  </form>
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
