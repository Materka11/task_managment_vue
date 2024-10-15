<script setup lang="ts">
import Logo from "./ProjectLogo.vue"
import SearchInput from "./SearchInput.vue"
import AddButton from "./AddButton.vue"
import ActionButton from "./ActionButton.vue"
import BellSVG from "@/assets/icons/BellSVG.vue"
import ShortProfile from "./ShortProfile.vue"

const { meData } = defineProps<{ meData: IUser | null }>()
console.log(meData)
</script>

<template>
  <nav class="flex bg-white">
    <Logo />
    <SearchInput />
    <AddButton label="Create Task" :handle-click="() => {}" />
    <ActionButton :handle-click="() => {}"><BellSVG /></ActionButton>
    <ShortProfile
      v-if="meData"
      :name="meData?.name"
      :surname="meData?.surname"
      :occupation="meData?.occupation"
    />
  </nav>
</template>
