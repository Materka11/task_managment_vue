<script setup lang="ts">
import InputForm from "@/components/InputForm.vue"
import FormTemplate from "@/templates/FormTemplate.vue"
import SubmitButton from "@/components/SubmitButton.vue"
import { ref } from "vue"
import gql from "graphql-tag"
import { useMutation } from "@vue/apollo-composable"

const REGISTER_MUTATION = gql`
  mutation Register($formData: UserInput) {
    register(input: $formData) {
      user {
        id
        email
        name
        surname
        occupation
        createdAt
        updatedAt
      }
      refreshToken
      token
    }
  }
`

const formData = ref({
  name: "",
  surname: "",
  email: "",
  occupation: "",
  password: "",
  confirmPassword: ""
})

const errorMessage = ref("")

const { mutate: submitRegister, loading, error, onDone } = useMutation(REGISTER_MUTATION)

const handleSubmit = () => {
  errorMessage.value = ""

  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = "Passwords do not match"
    return null
  }

  submitRegister({
    formData: {
      name: formData.value.name,
      surname: formData.value.surname,
      email: formData.value.email,
      occupation: formData.value.occupation,
      password: formData.value.password
    }
  })
    .then((response) => {
      console.log("User registered successfully:", response)
    })
    .catch((error) => {
      console.error("Registration error:", error)
    })
}
</script>

<template>
  <FormTemplate title="Welcome" subtitle="Sign Up with Email" :is-img="false">
    <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
      <InputForm id="name" label="Name">
        <input
          id="name"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="text"
          required
          v-model="formData.name"
      /></InputForm>
      <InputForm id="surname" label="Surname">
        <input
          id="surname"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="text"
          required
          v-model="formData.surname"
        />
      </InputForm>
      <InputForm id="email" label="Email">
        <input
          id="email"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="email"
          required
          v-model="formData.email"
        />
      </InputForm>
      <InputForm id="occupation" label="Occupation">
        <input
          id="occupation"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="text"
          required
          v-model="formData.occupation"
      /></InputForm>
      <InputForm id="password" label="Password">
        <input
          id="password"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="password"
          required
          v-model="formData.password"
      /></InputForm>
      <InputForm id="confirm-password" label="Confirm Password"
        ><input
          id="confirm-password"
          class="border-2 border-blue-400 rounded-lg h-12 px-4 outline-none leading-10"
          type="password"
          required
          v-model="formData.confirmPassword"
      /></InputForm>
      <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
      <span v-if="error" class="text-red-500">{{ error.message }}</span>
      <div class="flex flex-col justify-center items-center gap-4">
        <SubmitButton label="Sign Up" />
        <span
          >Do you have account?
          <RouterLink to="/login" class="font-bold">Login Now</RouterLink></span
        >
      </div>
    </form>
  </FormTemplate>
</template>
