// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons/iconfont/material-icons.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
import querystring from 'querystring'
import md5 from 'js-md5'

window.axios = Axios
window.querystring = querystring
Vue.prototype.$http = Axios

window.md5 = md5

import routes from './routes.js'
import auth from './auth'

import 'animate.css/animate.css'

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth === true && !auth.loggedIn()) {
    next('/login')
  } else {
    next()
  }
})

Vue.use(VueMaterial)
Vue.use(VueRouter)

// Vue material themes
Vue.material.registerTheme('custom', {
  primary: 'light-green',
  accent: {
    color: 'deep-orange',
    hue: 'A700'
  },
  warn: 'red',
  background: {
    color: 'amber',
    hue: 100
  }
})
// Apply themes
Vue.material.setCurrentTheme('custom')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
