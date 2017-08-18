
import login from '../views/login'
import test from '../views/test'
import index from '../views/index'
import baseTable from '../views/baseTable'
import baseForm from '../views/baseForm'
import editTinymce from '../views/editTinymce'
import editQuill from '../views/editQuill'
import upload from '../views/upload'

export default [
    {
      path: '/',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
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
    },
    {
      path: '/baseTable',
      name: 'baseTable',
      component: baseTable
    },
    {
      path: '/baseForm',
      name: 'baseForm',
      component: baseForm
    },
    {
      path: '/editTinymce',
      name: 'editTinymce',
      component: editTinymce
    },
    {
      path: '/editQuill',
      name: 'editQuill',
      component: editQuill
    },
     {
      path: '/upload',
      name: 'upload',
      component: upload
    }
];
