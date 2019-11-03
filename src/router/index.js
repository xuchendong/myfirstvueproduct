import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/home', component: home }
  ]
})
// 导航守卫
router.beforeEach(function (to, from, next) {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})
export default router
