import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import infor from '@/pages/infor/infor'
import my from '@/pages/my/my'
import shop from '@/pages/shop/shop'
import login from '@/pages/login/login'
import register from '@/pages/register/register'
import subscript from "@/pages/home/nav/subscript/subscript";
import hot from "@/pages/home/nav/hot";
import sort from "@/pages/home/nav/sort/sort";
import sort_detail_hot from "@/pages/home/nav/sort/sort_detail_hot";
import sort_detail_new from "@/pages/home/nav/sort/sort_detail_new";
import sort_detail_photographer from "@/pages/home/nav/sort/sort_detail_photographer";
import sort_detail from "@/pages/home/nav/sort/sort_detail";
import pic_detail from "@/pages/home/nav/subscript/subscript_detail_pic";
import movie_detail from "@/pages/home/nav/subscript/subscript_detail_movie";

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
      name: 'home',
      redirect: '/hot',
      meta: {
        showFooter: true
      },
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
      path:'/subscript/subscript_detail_pic',
      name:'pic_detail',
      component:pic_detail
    },
    {
      path:'/subscript/subscript_detail_movie',
      name:'movie_detail',
      component:movie_detail
    },
    {
      path:'/sort/sort_detail',
      name:'sort_detail',
      redirect: '/sort/sort_detail/hot',
      component:sort_detail,
      children:[
        {
          path: '/sort/sort_detail/hot',
          name: 'sort_detail_hot',
          component: sort_detail_hot
        },
        {
          path: '/sort/sort_detail/new',
          name: 'sort_detail_new',
          component: sort_detail_new
        },
        {
          path: '/sort/sort_detail/photographer',
          name: 'sort_detail_photographer',
          component: sort_detail_photographer
        }
      ]
    },
    {
      path:'/shop',
      name: 'shop',
      component: shop,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/infor',
      component: infor,
      name: 'infor',
      meta: {
        showFooter: true
      }
    },
    {
      path:'/my',
      name: 'my',
      component: my,
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
