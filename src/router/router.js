
import login from '../views/login.vue'
import test from '../views/test.vue'
export default [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
];
