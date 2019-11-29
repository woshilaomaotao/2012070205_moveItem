import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/pages/MSite/MSite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
