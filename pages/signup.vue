<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
    <form @submit.prevent="signup">
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        type="text"
        v-model="form.username"
        placeholder="Username"
      />
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        type="password"
        v-model="form.password"
        placeholder="Password"
      />
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        type="password"
        v-model="form.passwordConfirmation"
        placeholder="Password Confirmation"
      />
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        type="email"
        v-model="form.email"
        placeholder="Email"
      />
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        type="text"
        v-model="form.firstName"
        placeholder="First Name"
      />
      <input
        class="block mb-4 p-2 border border-gray-300 rounded-md"
        type="text"
        v-model="form.lastName"
        placeholder="Last Name"
      />
      <button class="bg-blue-500 text-white p-2 rounded-md" type="submit">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { fetch: refreshSession } = useUserSession();
const form = reactive({
  username: "",
  password: "",
  passwordConfirmation: "",
  email: "",
  firstName: "",
  lastName: "",
});

const signup = async () => {
  try {
    await $fetch("/api/auth/signup", {
      method: "POST",
      body: form,
    });
    await refreshSession();
    await navigateTo("/");
  } catch (error) {
    alert("Signup failed: " + (error as Error).message);
  }
};
</script>
