<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router"
import LoadingSpinner from "./LoadingSpinner.vue"
import { computed } from "vue"

const {
  isLink = false,
  isPrimary = true,
  label,
  link,
  styles = ""
} = defineProps<{
  isLink?: boolean
  isPrimary?: boolean
  label: string
  link?: string | RouteLocationRaw
  loading?: boolean
  styles?: string
}>()

if (isLink && !link) {
  throw new Error("Prop 'link' is required when 'isLink' is true.")
}

const baseStyle = isPrimary
  ? `flex justify-center items-center px-5 w-full rounded-lg bg-blue-500 text-white text-center font-bold h-16 text-nowrap sm:w-32 sm:px-6 sm:text-xl lg:w-48 lg:px-8 lg:text-2xl hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2`
  : `flex justify-center items-center px-5 w-full rounded-lg bg-white text-blue-500 border-blue-500 border-2 text-center font-bold h-16 text-nowrap sm:w-32 sm:px-6 sm:text-xl lg:w-48 lg:px-8 lg:text-2xl hover:bg-blue-500 hover:text-white`

const combinedStyle = computed(() => `${baseStyle} ${styles}`)
</script>

<template>
  <RouterLink v-if="isLink && link" :to="link" :class="combinedStyle">{{ label }}</RouterLink>

  <button v-else :class="combinedStyle" type="submit">
    <LoadingSpinner v-if="loading" :loading="loading" />
    <span v-else>{{ label }}</span>
  </button>
</template>
