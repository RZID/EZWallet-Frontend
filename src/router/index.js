import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Pin from '../views/Pin.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      for: 'unlog'
    }
  },
  {
    path: '/setPin',
    name: 'PIN',
    component: Pin,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      for: 'logged'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.for === 'logged') {
    if (Store.getters['auth/getToken']) {
      next()
    } else {
      router.push('/login').catch(() => { })
    }
  } else if (to.meta.for === 'unlog') {
    if (Store.getters['auth/getToken']) {
      router.push('/dashboard').catch(() => { })
    } else {
      next()
    }
  }
})

export default router
