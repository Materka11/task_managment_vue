<script setup lang="ts">
import Logo from "./ProjectLogo.vue"
import SearchInput from "./SearchInput.vue"
import AddButton from "./AddButton.vue"
import ActionButton from "./ActionButton.vue"
import BellSVG from "@/assets/icons/BellSVG.vue"
import ShortProfile from "./ShortProfile.vue"
import { ref } from "vue"
import HamburgerButton from "./HamburgerButton.vue"
import ButtonOrLink from "./ButtonOrLink.vue"
import HomeSVG from "@/assets/icons/HomeSVG.vue"
import MessageSVG from "@/assets/icons/MessageSVG.vue"
import NotepadSVG from "@/assets/icons/NotepadSVG.vue"
import PlusCircleFillSVG from "@/assets/icons/PlusCircleFillSVG.vue"
import TaskSVG from "@/assets/icons/TaskSVG.vue"
import GroupSVG from "@/assets/icons/GroupSVG.vue"
import GoalsSVG from "@/assets/icons/GoalsSVG.vue"
import ProjectSVG from "@/assets/icons/ProjectSVG.vue"
import SettingsSVG from "@/assets/icons/SettingsSVG.vue"
import HelpSVG from "@/assets/icons/HelpSVG.vue"
import LogOutSVG from "@/assets/icons/LogOutSVG.vue"

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
        <section class="flex flex-col gap-4 w-full">
          <ButtonOrLink label="Create Task" :handle-click="() => {}" type="button"
            ><PlusCircleFillSVG
          /></ButtonOrLink>
          <ButtonOrLink label="Notification" :handle-click="() => {}" type="button"
            ><BellSVG />
          </ButtonOrLink>
        </section>
        <hr class="border-2" />
        <section class="flex flex-col gap-4 w-full">
          <ButtonOrLink label="Home" href="/home" type="a"><HomeSVG /></ButtonOrLink>
          <ButtonOrLink label="Message" href="/message" type="a"
            ><MessageSVG class="stroke-gray-500 group-hover:stroke-blue-500"
          /></ButtonOrLink>
          <ButtonOrLink label="Activities" href="/activities" type="a"><NotepadSVG /></ButtonOrLink>
        </section>
        <hr class="border-2" />
        <section class="flex flex-col gap-4 w-full">
          <ButtonOrLink label="Task" href="/task" type="a"><TaskSVG /></ButtonOrLink>
          <ButtonOrLink label="Team mate" href="/team-mate" type="a"><GroupSVG /></ButtonOrLink>
          <ButtonOrLink label="Goals" href="/goals" type="a"><GoalsSVG /></ButtonOrLink>
        </section>
        <hr class="border-2" />
        <section class="flex flex-col gap-4 w-full">
          <ButtonOrLink label="Project" href="/project" type="a"><ProjectSVG /></ButtonOrLink>
        </section>
        <hr class="border-2" />
        <section class="flex flex-col gap-4 w-full">
          <ButtonOrLink label="Settings" href="/settings" type="a"><SettingsSVG /></ButtonOrLink>
          <ButtonOrLink label="Help" href="/help" type="a"><HelpSVG /></ButtonOrLink>
          <ButtonOrLink
            label="Log Out"
            href="/Logout"
            type="a"
            class-name="text-red-500 stroke-red-500"
            ><LogOutSVG
          /></ButtonOrLink>
        </section>
      </div>
    </div>
  </nav>
</template>
