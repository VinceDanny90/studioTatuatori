import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Route'
import 'bootstrap/dist/css/bootstrap.css'




createApp(App).use(router).mount('#app')
