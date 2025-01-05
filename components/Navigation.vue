<template>
  <nav class="px-10 py-4 text-xl bg-slate-100">
    <ul class="flex flex-row">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li
        v-if="user"
        @click="logout"
        class="flex items-center ms-auto cursor-pointer"
      >
        <Icon name="mdi:user" size="24" class="me-1" />
        {{ (user as User).username }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { User } from "~/types/user";

const { user, fetch: refreshSession, clear: clearSession } = useUserSession();

await refreshSession();

const logout = async () => {
  await clearSession();
  await navigateTo("/login");
};
</script>

<style scoped></style>
