// For Nuxt 3
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, fab);

export default defineNuxtPlugin((nuxtApp) => {
  //@ts-ignore
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
