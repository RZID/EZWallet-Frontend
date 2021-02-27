import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Pin from '../views/Pin.vue'
import Dashboard from '../views/Dashboard.vue'
import History from '../views/History.vue'
import Transfer from '../views/Transfer.vue'
import TopUp from '../views/HowToTopUp.vue'
import MyProfile from '../views/MyProfile.vue'
import ChangePass from '../views/ChangePassword.vue'
import ChangePin from '../views/ChangePin.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import ManageNumber from '../views/ManageNumber.vue'

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
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/topup',
    name: 'How To Top Up',
    component: TopUp,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/my-profile',
    name: 'My Profile',
    component: MyProfile,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/my-profile/change-pass',
    name: 'Change Password',
    component: ChangePass,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/my-profile/change-pin',
    name: 'Change PIN',
    component: ChangePin,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/my-profile/personal-info',
    name: 'Personal Information',
    component: PersonalInfo,
    meta: {
      for: 'logged'
    }
  },
  {
    path: '/my-profile/manage-number',
    name: 'Manage Phone Number',
    component: ManageNumber,
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
  window.scrollTo(0, 0)
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
