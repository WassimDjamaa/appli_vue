import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import myRestaurant from "@/pages/MyRestaurant.vue";

const routes = [
    { path: '/', component: HomePage },
    { name: 'myRestaurant', path: '/restaurant/:name', component: myRestaurant },
]

const router= createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const VueApp = createApp(App);
VueApp.use(router)

VueApp.mount('#app')

