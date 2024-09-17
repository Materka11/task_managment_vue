<script setup lang="ts"></script>

<template>
  <main class="flex flex-col h-screen">
    <h1 class="text-4xl text-blue-500 font-bold p-10">Project</h1>
    <div class="flex w-full h-full justify-center -mt-32">
      <div class="flex flex-col w-full justify-center items-center gap-8 sm:gap-12 lg:gap-24">
        <section class="flex flex-col gap-2 sm:gap-8">
          <h2 class="text-3xl text-blue-400 font-bold text-center sm:text-6xl lg:text-7xl">
            Simplify Your Workflow
          </h2>
          <h3 class="text-xl text-blue-300 font-bold text-center sm:text-3xl lg:text-4xl">
            Manage Tasks Like a Pro!
          </h3>
        </section>
        <div class="flex gap-10 lg:gap-20">
          <RouterLink
            to="/login"
            class="px-5 py-2 rounded-lg bg-blue-500 text-white text-center font-bold sm:w-32 sm:px-6 sm:py-3 sm:text-xl lg:w-48 lg:px-8 lg:py-4 lg:text-2xl"
            >Log In</RouterLink
          >
          <RouterLink
            to="/signup"
            class="px-5 py-2 rounded-lg bg-blue-500 text-white text-center font-bold sm:w-32 sm:px-6 sm:py-3 sm:text-xl lg:w-48 lg:px-8 lg:py-4 lg:text-2xl"
            >Sign Up</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
