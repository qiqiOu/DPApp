import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import infor from '@/pages/infor/infor'
import my from '@/pages/my/my'
import shop from '@/pages/shop/shop'
import order from '@/pages/shop/order/order'
import order_all from '@/pages/shop/order/order_all'
import order_subscribe from '@/pages/shop/order/order_subscribe'
import order_over from '@/pages/shop/order/order_over'
import order_evaluate from '@/pages/shop/order/order_evaluate'
import order_refund from '@/pages/shop/order/order_refund'
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
      redirect: '/home/hot',
      meta: {
        showFooter: true
      },
      children:[
        {
          path: '/home/subscript',
          name: 'subscript',
          component: subscript,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/home/hot',
          name: 'hot',
          component: hot,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/home/sort',
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
      path:'/order',
      name: 'order',
      component: order,
      redirect: '/order/order_all',
      children:[
        {
          path: '/order/order_all',
          name: 'order_all',
          component: order_all
        },
        {
          path: '/order/order_subscribe',
          name: 'order_subscribe',
          component: order_subscribe
        },
        {
          path: '/order/order_over',
          name: 'order_over',
          component: order_over
        },
        {
          path: '/order/order_evaluate',
          name: 'order_evaluate',
          component: order_evaluate
        },
        {
          path: '/order/order_refund',
          name: 'order_refund',
          component: order_refund
        }
      ]
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
