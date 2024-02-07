// import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Jekinraa from "@/pages/projects/Jekinraa.vue";
import Niann from "@/pages/projects/Niann.vue";
import Envoy from "@/pages/projects/Envoy.vue";
import FinSyt from "@/pages/projects/FinSyt.vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import "../src/index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/jekinraa", component: Jekinraa },
    { path: "/niann", component: Niann },
    { path: "/envoy", component: Envoy },
    { path: "/finsyt", component: FinSyt },
    { path: "/food" },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
