import { defineNuxtConfig } from "nuxt";
// plugins/bootstrap.client.ts
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/main.scss",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
    "bootstrap/dist/css/bootstrap.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "vue3-carousel/dist/carousel.css",
  ],
});
