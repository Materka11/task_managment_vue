<script setup lang="ts">
import SearchSVG from "@/assets/icons/SearchSVG.vue"
import SubmitButton from "./SubmitButton.vue"
</script>

<template>
  <form class="relative flex items-center space-x-2 lg:space-x-4 w-full max-w-md">
    <div class="absolute left-7">
      <SearchSVG />
    </div>

    <input
      type="search"
      id="default-search"
      class="pl-10 pr-4 py-2 w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
      placeholder="Search anything here..."
      required
    />

    <SubmitButton label="Search" styles="lg:w-20 lg:px-12 h-8 absolute right-3 lg:text-base" />
  </form>
</template>
