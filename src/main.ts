import { createApp } from "vue";
import pinia from "./plugins/index";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(pinia).mount("#app");