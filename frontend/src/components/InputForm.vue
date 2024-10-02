<script setup lang="ts">
const {
  id,
  label,
  isPassword = false
} = defineProps<{
  id: string
  label: string
  isPassword?: boolean
}>()
</script>

<template>
  <div v-if="isPassword" class="flex flex-col gap-2">
    <label :for="id" class="text-blue-400 px-4 font-bold">{{ label }}</label>
    <slot></slot>
    <button class="self-end text-gray-500">Forgot your password?</button>
  </div>
  <div v-else class="flex flex-col gap-2">
    <label :for="id" class="text-blue-400 px-4 font-bold">{{ label }}</label>
    <slot></slot>
  </div>
</template>
