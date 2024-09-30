<script setup lang="ts">
const {
  title,
  subtitle,
  isImg = true
} = defineProps<{
  title: string
  subtitle: string
  isImg?: boolean
}>()

const containerStyles = isImg
  ? "w-full h-full flex justify-center items-center md:w-1/2"
  : "w-full h-full flex justify-center items-center"

const containerChildStyles = isImg
  ? "w-2/3 h-2/3 flex flex-col gap-8"
  : "w-2/3 h-full flex flex-col gap-8 justify-start md:w-1/2 py-20"

const mainStyles = isImg ? "h-screen flex" : "flex"
</script>

<template>
  <main :class="mainStyles">
    <div v-if="isImg" class="h-full w-1/2 hidden md:block">
      <img src="../assets/task_management.webp" alt="task management" class="h-full object-cover" />
    </div>
    <div :class="containerStyles">
      <div :class="containerChildStyles">
        <div class="flex flex-col gap-2">
          <h1 class="text-5xl text-blue-400 font-bold text-center lg:text-7xl">{{ title }}</h1>
          <h2 class="text-xl text-gray-500 text-center lg:text-2xl">{{ subtitle }}</h2>
        </div>
        <slot></slot>
      </div>
    </div>
  </main>
</template>
