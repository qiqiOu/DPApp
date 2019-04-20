import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import infor from '@/pages/infor/infor'
import my from '@/pages/my/my'
import publish from  '@/pages/publish/publish'
import shop from '@/pages/shop/shop'
import login from '@/pages/login/login'
import register from '@/pages/register/register'
import subscript from "@/pages/home/nav/subscript";
import hot from "@/pages/home/nav/hot";
import sort from "@/pages/home/nav/sort";

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/hot'
    },
    {
      path: '/home',
      component: home,
      redirect: '/hot',
      children:[
        {
          path: '/subscript',
          name: 'subscript',
          component: subscript,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/hot',
          name: 'hot',
          component: hot,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/sort',
          name: 'sort',
          component: sort,
          meta: {
            showFooter: true
          }
        }
      ]
    },
    {
      path:'/infor',
      component: infor,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/my',
      component: my,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/publish',
      component: publish,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/shop',
      component: shop,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
