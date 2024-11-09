<script setup lang="ts">
interface IA {
  label: string
  href: string
  type: "a"
  handleClick?: () => void
  className?: string
}

interface IButton {
  label: string
  type: "button"
  handleClick: () => void
  href?: string
  className?: string
}

const { label, href, type, handleClick, className } = defineProps<IA | IButton>()

const styles = `flex gap-2 w-fit text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500 group ${className}`
</script>

<template>
  <a v-if="type === `a`" :href="href" :class="{ styles }"
    ><slot></slot><span class="font-bold">{{ label }}</span></a
  >
  <button v-if="type === `button`" @click="handleClick" :class="{ styles }">
    <slot></slot><span class="font-bold">{{ label }}</span>
  </button>
</template>
