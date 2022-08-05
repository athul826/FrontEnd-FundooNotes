import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/UserSignUp.vue'
import LoginView from '../views/UserLogin.vue'
import ForgetPasswordView from '../views/ForgetPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import DashboardView from '../views/DashboardView.vue'
// import CreateNoteView from '../views/CreateNoteView.vue'
import GetAllNotes from '../views/GetNote.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'RegistrationView',
    component:RegistrationView
  },
  {
    path: '/login',
    name: 'LoginView',
    component:LoginView
  },
  {
    path: '/forget',
    name: 'ForgetPasswordView',
    component:ForgetPasswordView
  },
  {
    path: '/resetPassword/:token',
    name: 'ResetPasswordView',
    component:ResetPasswordView
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component:DashboardView,
    children:[
      {
        name: 'GetAllNotes',
        path: '/',
        component: GetAllNotes
        }
      ]
    
    },
    
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
