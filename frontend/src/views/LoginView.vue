<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import SubmitButton from "@/components/SubmitButton.vue"
</script>

<template>
  <main class="h-screen flex">
    <div class="h-full w-1/2 hidden md:block">
      <img src="../assets/task_management.webp" alt="task management" class="h-full object-cover" />
    </div>
    <div class="w-full h-full flex justify-center items-center md:w-1/2">
      <div class="w-2/3 h-2/3 flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <h1 class="text-5xl text-blue-400 font-bold text-center lg:text-7xl">Welcome</h1>
          <h2 class="text-xl text-gray-500 text-center lg:text-2xl">Login with Email</h2>
        </div>
        <form class="flex flex-col gap-6">
          <InputForm id="email" label="Email" :is-email="true" />
          <InputForm id="password" label="Password" :is-password="true" />
          <div class="flex flex-col justify-center items-center gap-4">
            <SubmitButton label="Login" />
            <span
              >Don't have account?
              <RouterLink to="/signup" class="font-bold">Register Now</RouterLink></span
            >
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
