import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' // 导入 Pinia

createApp(App)
  .use(createPinia()) // 使用 Pinia
  .use(router) // 使用 Vue Router
  .mount('#app')
