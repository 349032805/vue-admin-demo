
import login from '../views/login.vue'
import test from '../views/test.vue'
import index from '../views/index.vue'
export default [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/index',
      name: 'index',
      component: index
    }
];
