<script setup lang="ts">
import Logo from "./ProjectLogo.vue"
import SearchInput from "./SearchInput.vue"
import AddButton from "./AddButton.vue"
import ActionButton from "./ActionButton.vue"
import BellSVG from "@/assets/icons/BellSVG.vue"
import ShortProfile from "./ShortProfile.vue"

const { user } = defineProps<{ user: IUser | null }>()
</script>

<template>
  <nav class="flex bg-white justify-between px-20 h-20">
    <div class="flex flex-row h-full w-full justify-between gap-5 items-center">
      <Logo />
      <SearchInput />
    </div>
    <div class="flex flex-row h-full w-full justify-end gap-10 items-center">
      <AddButton label="Create Task" :handle-click="() => {}" />
      <ActionButton :handle-click="() => {}"><BellSVG /></ActionButton>
      <ShortProfile
        v-if="user"
        :name="user?.name"
        :surname="user?.surname"
        :occupation="user?.occupation"
      />
    </div>
  </nav>
</template>
