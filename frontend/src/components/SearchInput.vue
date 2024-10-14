<script setup lang="ts">
import SubmitButton from "./SubmitButton.vue"
</script>

<template>
  <form class="relative flex items-center space-x-2 lg:space-x-4 w-full max-w-md">
    <div class="absolute left-7">
      <svg
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>

    <input
      type="search"
      id="default-search"
      class="pl-10 pr-4 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
      placeholder="Search anything here..."
      required
    />

    <SubmitButton label="Search" styles="lg:w-20 h-8 absolute right-3 lg:text-base" />
  </form>
</template>
