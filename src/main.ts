import "@/styles.css";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeViewVue from "./views/HomeView.vue";
import PrivacyViewVue from "./views/PrivacyView.vue";

const app = createApp(App);

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeViewVue,
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: PrivacyViewVue,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(createPinia());
app.use(MotionPlugin);
app.use(router);
app.mount("#app");
