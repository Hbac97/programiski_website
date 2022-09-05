import { createApp } from 'vue'
import App from './App.vue'
import shell from 'vue3-shell'
import router from './router'
import './assets/tailwind.css'
import VueMobileDetection from "vue-mobile-detection";

createApp(App).use(router).use(shell).use(VueMobileDetection).mount('#app')
