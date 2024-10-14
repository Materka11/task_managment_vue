<script setup lang="ts">
import NavDashboard from "@/components/NavDashboard.vue"
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"
import { inject, onMounted } from "vue"
import type { VueCookies } from "vue-cookies"
import { useRoute } from "vue-router"
import { toast } from "vue3-toastify"

const ME_QUERY = gql`
  query Me {
    me {
      name
      id
      email
    }
  }
`

const route = useRoute()

const $cookies = inject<VueCookies>("$cookies")

const { result: meData } = useQuery(
  ME_QUERY,
  {},
  {
    context: {
      headers: {
        Authorization: $cookies?.get("Authorization")
      }
    }
  }
)
console.log(meData.value)

onMounted(async () => {
  if (route.query.login === "success") {
    toast.success("Login success")
  }
})
</script>

<template>
  <NavDashboard />
</template>
