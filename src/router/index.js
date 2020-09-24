import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/login/Login'
import Layout from 'views/layout/Layout'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isLogin: false
    }
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    meta: {
      isLogin: true
    },
    children: [
      {
        path: '/games',
        component: () => import('@/views/games/Games'),
        meta: {
          isLogin: true
        },
        children: [
          {
            path: '/',
            redirect: '/games2048',
            meta: {
              isLogin: true
            }
          },
          {
            path: '/games2048',
            component: () => import('@/views/games/gameItem/Game2048'),
            meta: {
              isLogin: true
            }
          }
        ]
      },
      {
        path: '/',
        redirect: '/home',
        meta: {
          isLogin: true
        }
      },
      {
        path: '/home',
        component: () => import('@/views/home/Home'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/photo',
        component: () => import('@/views/photo/Photo'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/profile',
        // component: () => import('@/views/profile/Profile')
        component: () => import('@/views/games/Games'),
        meta: {
          isLogin: true
        }
      },
      {
        path: '/search',
        // component: () => import('@/views/search/Search')
        component: () => import('@/views/games/Games'),
        meta: {
          isLogin: true
        }
      }
    ],
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
