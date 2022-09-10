import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(Carousel, Slide, Pagination, Navigation);
  nuxtApp.vueApp.component(Carousel.name, Carousel);
  nuxtApp.vueApp.component("slide", Slide);
  nuxtApp.vueApp.component(Pagination.name, Pagination);
  nuxtApp.vueApp.component(Navigation.name, Navigation);
});
