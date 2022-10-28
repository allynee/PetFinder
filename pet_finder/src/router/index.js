import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportPet from '../views/ReportPet.vue'
import Dashboard from '../views/Dashboard.vue'
import MyMap from '../views/MyMap.vue'
import Inbox from '../views/Inbox.vue'
import SignUp from '../views/SignUp.vue'
import Learn from '../views/Learn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reportpet',
    name: 'reportpet',
    component: ReportPet
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/mymap',
    name: 'mymap',
    component: MyMap
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Inbox
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
