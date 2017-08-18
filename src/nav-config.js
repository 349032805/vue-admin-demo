const nav = [
  //  {
  //   name: 'welcome',
  //   text: '首页',
  //   icon: 'th-large',
  //   path: '/index'
  // },
   {
    name: 'table',
    text: '表格',
    icon: 'th-large',
    children: [
      {
        name: 'table',
        path: '/table',
        icon: 'table',
        text: '基础表格'
      }
    ]
  },
  {
    name: 'form',
    text: '表单',
    icon: 'gear',
    children: [
      {
        name: 'form',
        path: '/form',
        icon: 'list-alt',
        text: '基本表单'
      }, {
        name: 'editor',
        path: '/editor',
        icon: 'file',
        text: '编辑器tinymce'
      },{
        name: 'editor',
        path: '/editor2',
        icon: 'file',
        text: '编辑器Quill'
      },{
        name: 'upload',
        path: '/upload',
        icon: 'cloud-upload',
        text: '文件上传'
      }
      
    ]
  }
]
export default nav
