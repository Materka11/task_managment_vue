<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"
import SubmitButton from "@/components/SubmitButton.vue"
</script>

<template>
  <FormTemplate title="Welcome" subtitle="Login with Email">
    <form class="flex flex-col gap-6">
      <InputForm id="email" label="Email" :required="true" type="email" />
      <InputForm id="password" label="Password" :is-password="true" />
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
