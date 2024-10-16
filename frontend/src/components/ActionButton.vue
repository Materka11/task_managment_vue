<script setup lang="ts">
const { handleClick } = defineProps<{ handleClick: () => void }>()
</script>

<template>
  <button
    @onclick="handleClick"
    class="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white hover:fill-white flex items-center space-x-2 border-blue-500 border-2"
  >
    <slot></slot>
  </button>
</template>
