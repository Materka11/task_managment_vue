<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"
import SubmitButton from "@/components/SubmitButton.vue"
</script>

<template>
  <FormTemplate title="Welcome" subtitle="Sign Up with Email" :is-img="false">
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
    <div class="flex flex-col justify-center items-center gap-4">
      <SubmitButton label="Sign Up" />
      <span
        >Do you have account? <RouterLink to="/login" class="font-bold">Login Now</RouterLink></span
      >
    </div>
  </FormTemplate>
</template>
