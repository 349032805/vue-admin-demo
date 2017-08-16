import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

import Layout from './components/Layout'
import Editor from './components/Editor'

Vue.component(Layout.name, Layout)
Vue.component(Editor.name, Editor)

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
