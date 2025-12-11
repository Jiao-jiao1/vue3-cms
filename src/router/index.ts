import { createRouter, createWebHistory } from 'vue-router'

// 引入你的页面组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 创建路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
