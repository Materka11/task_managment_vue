<script setup lang="ts">
import LoadingSpinner from "@/components/LoadingSpinner.vue"
import NavDashboard from "@/components/NavDashboard.vue"
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"
import { inject, onMounted, ref, watch } from "vue"
import type { VueCookies } from "vue-cookies"
import { useRoute } from "vue-router"
import { toast } from "vue3-toastify"

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      name
      surname
      occupation
      password
      createdAt
      updatedAt
    }
  }
`

const route = useRoute()

const user = ref<IUser | null>(null)

const $cookies = inject<VueCookies>("$cookies")
const token = $cookies?.get("Authorization")

if (!token) {
  console.error("Authorization token is missing!")
}

const {
  result: meData,
  loading,
  error
} = useQuery(
  ME_QUERY,
  {},
  {
    context: {
      headers: {
        Authorization: token || ""
      }
    },
    fetchPolicy: "network-only"
  }
)
if (error.value) {
  console.error("GraphQL Error:", error.value)
}

watch(loading, (isLoading) => {
  if (!isLoading) {
    user.value = meData.value
  }
})

console.log(user.value)

onMounted(async () => {
  console.log("Loading:", loading.value)
  console.log("meData onMounted:", meData.value)
  if (route.query.login === "success") {
    toast.success("Login success")
    setTimeout(() => history.replaceState({}, "", route.path), 5000)
  }
})
</script>

<template>
  <main class="d-flex flex-col bg-blue-100 min-h-screen">
    <LoadingSpinner v-if="loading" :loading="loading" />

    <NavDashboard v-else-if="meData?.value" :meData="meData.value" />

    <p v-else class="text-red-500 text-center">{{ error?.message }}</p>
  </main>
</template>
