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
export default router
