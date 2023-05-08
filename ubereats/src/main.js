import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import Restaurant from "@/pages/MyRestaurant.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/restaurant', component: Restaurant },
]

const router= createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const VueApp = createApp(App);
VueApp.use(router)

VueApp.mount('#app')

