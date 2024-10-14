<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"
import SubmitButton from "@/components/SubmitButton.vue"
import { useRoute, useRouter } from "vue-router"
import { toast } from "vue3-toastify"
import { inject, onMounted, ref } from "vue"
import gql from "graphql-tag"
import { useLazyQuery } from "@vue/apollo-composable"
import type { VueCookies } from "vue-cookies"

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        name
        createdAt
        id
        occupation
        surname
        updatedAt
        email
      }
      refreshToken
      token
    }
  }
`
const formData = ref({
  email: "",
  password: ""
})

const route = useRoute()
const router = useRouter()

const $cookies = inject<VueCookies>("$cookies")

const {
  load: login,
  loading,
  error
} = useLazyQuery(LOGIN_QUERY, {
  email: formData.value.email,
  password: formData.value.password
})

onMounted(() => {
  if (route.query.register === "success") {
    toast.success("Register success")
  }
})

const handleSubmit = async () => {
  try {
    const { login: data } = await login(null, {
      email: formData.value.email,
      password: formData.value.password
    })

    $cookies?.set("Authorization", data.token, "2h")
    $cookies?.set("Refresh_token", data.refreshToken, "1d")
    router.push({ path: "/dashboard", query: { login: "success" } })
  } catch (e) {
    console.error(e)
    toast.error("Login failed")
  }
}
</script>

<template>
  <FormTemplate title="Welcome" subtitle="Login with Email">
    <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
      <InputForm id="email" label="Email">
        <input
          id="email"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="email"
          required
          v-model="formData.email"
        />
      </InputForm>
      <InputForm id="password" label="Password" :is-password="true"
        ><input
          id="password"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="password"
          required
          minlength="8"
          v-model="formData.password"
      /></InputForm>
      <span v-if="error" class="text-red-500">{{ error.message }}</span>
      <div class="flex flex-col justify-center items-center gap-4">
        <SubmitButton label="Log In" :loading="loading" />
        <span
          >Don't have account?
          <RouterLink to="/signup" class="font-bold">Register Now</RouterLink></span
        >
      </div>
    </form>
  </FormTemplate>
</template>
