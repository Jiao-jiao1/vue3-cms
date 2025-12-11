import { createRouter, createWebHistory } from 'vue-router'

// 引入你的页面组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import UserProfile from '../views/UserProfile.vue'

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
  {
    path: '/user/:id', // 动态路由
    name: 'UserProfile',
    component: UserProfile,
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 全局路由守卫
/**
 * beforeEach：这个钩子函数会在每次路由跳转之前执行。它接收三个参数：
 * to：即将进入的路由对象
 * from：当前路由对象
 * next：放行路由跳转。如果判断条件满足，可以跳转到别的页面。
 * 调用 next() 表示继续，调用 next(false) 表示中断跳转。
 * */
router.beforeEach((to, from, next) => {
  const isLoggedIn = false // 这里模拟登录状态
  if (to.name === 'About' && !isLoggedIn) {
    // 如果没有登录且尝试访问 About 页面，重定向到首页
    next('/')
  } else {
    next() // 放行，继续路由跳转
  }
})

export default router
