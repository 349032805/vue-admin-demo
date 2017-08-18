import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// 路由可以全部一次记载,在PC浏览器上影响不大,在移动端采用异步路由较好,提升首页的加载速度
import routes from './router/router'
//异步路由
// import routes from './router/router2'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

import Layout from './components/Layout'
import Editor from './components/Editor'

// import NavArr from './nav-config'
import NavArr from './nav-config2'

Vue.component(Layout.name, Layout)
Vue.component(Editor.name, Editor)

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});


//监听路由,可以判断是否进行了登录
//这里是处理面包屑导航的拼装
router.beforeEach((to,from,next)=>{
  console.log(from)
  console.log(to)
  Vue.prototype.$menuArr = [];
  
  //将解析的导航数组挂在Vue上给页面调用
  //vuex应该也可以,待以后尝试!!!
  //通过地址栏的路由来解析
  let goto = to.fullPath;

  // NavArr.forEach(nav=>{
  //  nav.children.forEach(childObj=>{
  //    if(childObj.path == goto){
  //      Vue.prototype.$menuArr.push(nav.text);
  //      Vue.prototype.$menuArr.push(childObj.text);
  //    }
  //  })
  // })

  NavArr.forEach(nav=>{
    if(nav.path == goto){
      Vue.prototype.$menuArr.push(nav.title);
      return;
    }
    if(nav.subs){
       nav.subs.forEach(childObj=>{
        if(childObj.path == goto){
          Vue.prototype.$menuArr.push(nav.title);
          Vue.prototype.$menuArr.push(childObj.title);
            return;
        }
      })
    }
  
  })


  next();  //此方法必须调用
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
