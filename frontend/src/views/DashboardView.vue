<script setup lang="ts">
import NavDashboard from "@/components/NavDashboard.vue"
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { toast } from "vue3-toastify"

const route = useRoute()

onMounted(() => {
  if (route.query.login === "success") {
    toast.success("Login success")
  }
})
</script>

<template>
  <NavDashboard />
</template>
