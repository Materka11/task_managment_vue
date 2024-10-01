<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"
import SubmitButton from "@/components/SubmitButton.vue"
import { useRoute } from "vue-router"
import { toast } from "vue3-toastify"
import { onMounted } from "vue"

const route = useRoute()

onMounted(() => {
  if (route.query.register === "success") {
    toast.success("Register success")
  }
})
</script>

<template>
  <FormTemplate title="Welcome" subtitle="Login with Email">
    <form class="flex flex-col gap-6">
      <!-- <InputForm id="email" label="Email" :required="true" type="email" /> -->
      <!-- <InputForm id="password" label="Password" :is-password="true" ><input
      :id="id"
      class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
      type="password"
      required
      minlength="8"
      v-model="value"
    /></InputForm> -->
      <div class="flex flex-col justify-center items-center gap-4">
        <SubmitButton label="Log In" />
        <span
          >Don't have account?
          <RouterLink to="/signup" class="font-bold">Register Now</RouterLink></span
        >
      </div>
    </form>
  </FormTemplate>
</template>
