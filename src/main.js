import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('user') === 'null' || localStorage.getItem('user') === null || localStorage.getItem('user') === undefined || localStorage.getItem('user') === '' ? null : localStorage.getItem('user')
  console.log(user)
  // 如果有token 说明该用户已登陆
  console.log("to query", to.query)
  if (to.meta.isLogin && user) {
    next()
  } else if (to.meta.isLogin && !user) {
    next({
      path: '/login',
      query: {
        redirectPath: to.path
      }
    })
  } else if (user && to.path === '/login') {
    next({
      path: '/'
    })

  } else if (!user && to.path !== '/login') {
    next({
      path: '/login',
      query: {
        redirectPath: to.query.redirectPath
      }
    })
  } else {
    next()
  }
//   if (to.meta.isLogin && user) {
//     // 在已登陆的情况下访问登陆页会重定向到首页
//     // if (to.path === '/login') {
//     //   console.log(11111)
//     //   next({path: '/'})
//     // } else {
//     //   console.log(to.path)
//     //   next({path: to.path || '/'})
//     // }
//     console.log("已经登陆跳转", to.path)
//     next()
//   } else {
//     //   next('/login?redirect=${to.path}')
//     // 没有登陆则访问任何页面都重定向到登陆页
//     // if (to.path === '/login') {
//     //   console.log(33333)
//     //   next()
//     // } else {
//     //   console.log(44444)
// // }
//     if (to.path === '/login') {
//       console.log("用户未登陆 且访问登陆页面")
//       next()
//     }else {
//       console.log("去登陆", to.path)
//       next({path:'/login', query:{redirect:to.path}})
//       // router.push({path:'/login', query:{redirect:to.path}})
//     }
//   }
//   next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
