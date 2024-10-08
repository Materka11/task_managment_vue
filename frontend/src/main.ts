import { createApp, h, provide } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import VueCookies from "vue-cookies"

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.use(router)
app.use(Vue3Toastify, {} as ToastContainerOptions)
app.use(VueCookies)

app.mount("#app")
