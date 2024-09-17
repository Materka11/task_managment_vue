<script setup lang="ts">
const {
  id,
  label,
  isPassword = false,
  isEmail = false
} = defineProps<{
  id: string
  label: string
  isPassword?: boolean
  isEmail?: boolean
}>()
</script>

<template>
  <div v-if="isPassword" class="flex flex-col gap-2">
    <label :for="id" class="text-blue-400 px-4 font-bold">{{ label }}</label>
    <input
      :id="id"
      class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
      type="password"
      required
      minlength="8"
    />
    <button class="self-end text-gray-500">Forgot your password?</button>
  </div>
  <div v-else-if="isEmail" class="flex flex-col gap-2">
    <label :for="id" class="text-blue-400 px-4 font-bold">{{ label }}</label>
    <input
      :id="id"
      class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
      required
      type="email"
    />
  </div>
  <div v-else class="flex flex-col gap-2">
    <label :for="id" class="text-blue-400 px-4 font-bold">{{ label }}</label>
    <input :id="id" class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10" />
  </div>
</template>
