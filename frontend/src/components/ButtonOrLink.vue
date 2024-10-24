<script setup lang="ts">
interface IA {
  label: string
  href: string
  type: "a"
  handleClick?: () => void
}

interface IButton {
  label: string
  type: "button"
  handleClick: () => void
  href?: string
}

const { label, href, type, handleClick } = defineProps<IA | IButton>()
</script>

<template>
  <a
    v-if="type === `a`"
    :href="href"
    class="flex gap-2 w-fit text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500 group"
    ><slot></slot><span class="font-bold">{{ label }}</span></a
  >
  <button
    v-if="type === `button`"
    @click="handleClick"
    class="flex gap-2 w-fit text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500 group"
  >
    <slot></slot><span class="font-bold">{{ label }}</span>
  </button>
</template>
