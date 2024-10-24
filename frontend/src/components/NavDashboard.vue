<script setup lang="ts">
import Logo from "./ProjectLogo.vue"
import SearchInput from "./SearchInput.vue"
import AddButton from "./AddButton.vue"
import ActionButton from "./ActionButton.vue"
import BellSVG from "@/assets/icons/BellSVG.vue"
import ShortProfile from "./ShortProfile.vue"
import { ref } from "vue"
import HamburgerButton from "./HamburgerButton.vue"
import PathLink from "./PathLink.vue"
import HomeSVG from "@/assets/icons/HomeSVG.vue"
import MessageSVG from "@/assets/icons/MessageSVG.vue"
import NotepadSVG from "@/assets/icons/NotepadSVG.vue"

const { user } = defineProps<{ user: IUser | null }>()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="flex bg-white justify-between px-5 xl:px-20 h-20">
    <div class="flex flex-row h-full w-full justify-between gap-5 items-center">
      <Logo />
      <SearchInput />
      <HamburgerButton :is-menu-open="isMenuOpen" :toggleMenu="toggleMenu" />
    </div>

    <div class="hidden md:flex flex-row h-full w-full justify-end gap-5 items-center">
      <AddButton label="Create Task" :handle-click="() => {}" />
      <ActionButton :handle-click="() => {}"><BellSVG /></ActionButton>
      <ShortProfile
        v-if="user"
        :name="user?.name"
        :surname="user?.surname"
        :occupation="user?.occupation"
      />
    </div>

    <div
      v-if="isMenuOpen"
      class="absolute top-0 right-0 bg-white w-full h-screen flex flex-col p-5 md:hidden gap-5"
    >
      <div class="flex justify-between w-full">
        <ShortProfile
          v-if="user"
          :name="user?.name"
          :surname="user?.surname"
          :occupation="user?.occupation"
        />
        <HamburgerButton :is-menu-open="isMenuOpen" :toggleMenu="toggleMenu" />
      </div>
      <div class="flex flex-col gap-10 w-full py-10">
        <section class="flex flex-col gap-2 w-full">
          <AddButton label="Create Task" :handle-click="() => {}" />
          <ActionButton :handle-click="() => {}"
            ><BellSVG /> <span class="font-bold">Notification</span></ActionButton
          >
        </section>
        <section class="flex flex-col gap-4 w-full">
          <PathLink label="Home" href="/home"><HomeSVG /></PathLink>
          <PathLink label="Message" href="/message"
            ><MessageSVG class="stroke-gray-500 group-hover:stroke-blue-500"
          /></PathLink>
          <PathLink label="Activities" href="/activities"><NotepadSVG /></PathLink>
        </section>
        <hr class="border-2" />
      </div>
    </div>
  </nav>
</template>
