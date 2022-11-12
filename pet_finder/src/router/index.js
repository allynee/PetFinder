import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportPet from '../views/ReportPet.vue'
import Search from '../views/Dashboard.vue'
import MyMap from '../views/MyMap.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

import SignUp from '../views/SignUp.vue'
import Learn from '../views/Learn.vue'
import Account from '../views/Account.vue'
import IndivPet from '../components/IndivPet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/indivpet',
    name: 'indivpet',
    component: IndivPet
  },
  {
    path: '/reportpet',
    name: 'reportpet',
    component: ReportPet
  },
  {
    path: '/SearchAllPets',
    name: 'search',
    component: Search
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/MyMap',
    name: 'MyMap',
    component: MyMap,
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  { 
    path:'/login',
    name:'/login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
