<script setup lang="ts">
const { label, href } = defineProps<{ label: string; href: string }>()
</script>

<template>
  <a
    :href="href"
    class="flex gap-2 w-fit text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500 group"
    ><slot></slot><span class="font-bold">{{ label }}</span></a
  >
</template>
