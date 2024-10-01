<script setup lang="ts">
const { loading } = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div
    v-if="loading"
    class="w-12 h-12 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"
  ></div>
</template>
