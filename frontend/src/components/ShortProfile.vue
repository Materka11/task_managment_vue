<script setup lang="ts">
const { name, surname, occupation } = defineProps<{
  name: string
  surname: string
  occupation: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <a href="/profile" class="font-bold text-gray-800">{{ `${name} ${surname}` }}</a>
    <p class="font-semibold text-sm text-gray-500">{{ occupation }}</p>
  </div>
</template>
