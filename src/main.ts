import { createApp } from "vue";
import Vue3Lottie from "vue3-lottie";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(Vue3Lottie);
app.mount("#app");
