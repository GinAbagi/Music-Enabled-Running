import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import Profile from '../views/profile.vue'
import History from '../views/history.vue'
import DuringRun from '../views/DuringRun.vue'
import StartRun from '../views/StartRun.vue'
import Login from '../views/Login.vue'
import HistoryDetail from '../views/HistoryDetail.vue'
import BeforeRun from '../views/BeforeRun.vue'

//import NavBar from './components/navBar.vue'

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/History',
    name: 'History',
    component: History
  },
  {
    path: '/DuringRun',
    name: 'DuringRun',
    component: DuringRun
  },
  {
    path: '/StartRun',
    name: 'StartRun',
    component: StartRun
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/HistoryDetail',
    name: 'HistoryDetail',
    component: HistoryDetail,
    props: true
  },
  {
    path: '/BeforeRun',
    name: 'BeforeRun',
    component: BeforeRun,
    props: true
  },

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active"
})

export default router
