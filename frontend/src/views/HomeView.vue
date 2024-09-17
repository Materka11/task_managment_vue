<script setup lang="ts">
import SubmitButton from "@/components/SubmitButton.vue"
</script>

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
          <SubmitButton :is-link="true" label="Log In" link="/login" />
          <SubmitButton :is-link="true" label="Sign Up" link="/signup" :is-primary="false" />
        </div>
      </div>
    </div>
  </main>
</template>
