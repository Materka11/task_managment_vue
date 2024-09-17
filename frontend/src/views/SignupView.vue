<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"

const INFO_TEXT: [string, string, string] = ["Do you have account?", "/login", "Login Now"]
</script>

<template>
  <FormTemplate
    title="Welcome"
    subtitle="Sign Up with Email"
    button-text="Sign Up"
    :info-text="INFO_TEXT"
    :is-img="false"
  >
    <InputForm id="name" label="Name" :required="true" type="text" />
    <InputForm id="surname" label="Surname" :required="true" type="text" />
    <InputForm id="email" label="Email" :required="true" type="email" />
    <InputForm id="occupation" label="Occupation" :required="true" type="text" />
    <InputForm id="password" label="Password" :required="true" type="password" minlength="8" />
    <InputForm
      id="confirm-password"
      label="Confirm Password"
      :required="true"
      type="password"
      minlength="8"
    />
  </FormTemplate>
</template>
