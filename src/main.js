// Setup Pinia JS
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.pcss";
// App Wide Components
import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";
// Icons and Styles
import FontAwesomePlugin from "./plugins/FontAwesome";

// Init App
createApp(App)
  .use(FontAwesomePlugin)
  .use(createPinia())
  .component("AppButton", AppButton)
  .component("AppCountInput", AppCountInput)
  .component("AppModalOverlay", AppModalOverlay)
  .mount("#app");
