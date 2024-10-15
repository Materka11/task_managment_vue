<script setup lang="ts">
import PlusCircleFillSVG from "@/assets/icons/PlusCircleFillSVG.vue"

const { label, handleClick } = defineProps<{ label: string; handleClick: () => void }>()
</script>

<template>
  <button
    @click="handleClick"
    class="bg-white text-blue-500 py-2 px-4 rounded-md fill-blue-500 hover:bg-blue-500 hover:text-white hover:fill-white flex items-center space-x-2 border-blue-500 border-2"
  >
    <PlusCircleFillSVG />
    <span class="font-bold">{{ label }}</span>
  </button>
</template>
