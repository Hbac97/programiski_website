import { createApp } from 'vue'
import App from './App.vue'
import shell from 'vue-shell'
import router from './router'
import './assets/tailwind.css'

createApp(App).use(router).use(shell).mount('#app')
