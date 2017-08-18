const nav = [
  //  {
  //   name: 'welcome',
  //   text: '首页',
  //   icon: 'th-large',
  //   path: '/index'
  // },
  {
    name: 'demo',
    text: '演示',
    icon: 'gear',
    children: [
      {
        name: 'user',
        path: '/user',
        icon: 'user',
        text: '用户管理'
      }, {
        name: 'editor',
        path: '/editor',
        icon: 'file',
        text: '富文本'
      }
    ]
  }
]
export default nav
