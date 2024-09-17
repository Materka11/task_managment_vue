<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"

const INFO_TEXT: [string, string, string] = ["Don't have account?", "/signup", "Register Now"]
</script>

<template>
  <FormTemplate
    title="Welcome"
    subtitle="Login with Email"
    button-text="Log In"
    :info-text="INFO_TEXT"
  >
    <InputForm id="email" label="Email" :required="true" type="email" />
    <InputForm id="password" label="Password" :is-password="true" />
  </FormTemplate>
</template>
