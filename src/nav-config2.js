const nav = [
  {
    icon: 'fa fa-home fa-lg',
    index: 'index',
    path: '/index',
    title: '首页'
  },{
    icon: 'fa fa-table',
    index: '2',
    title: '表格',
    subs: [
        {
            index: 'table',
            path:'/table',
            icon: 'fa fa-icon-table',
            title: '基础表格'
        }
    ]
  },{
    icon: 'fa fa-table',
    index: '3',
    title: '表单',
    subs: [
        {
            index: 'form',
            path:'/form',
            icon: 'fa fa-list-alt',
            title: '基本表单'
        },{
            index: 'editor',
            path:'/editor',
            icon: 'fa fa-icon-edit',
            title: '编辑器tinymce'
        },{
            index: 'editor2',
            path:'/editor2',
            icon: 'fa fa-icon-edit',
            title: '编辑器Quill'
        },{
            index: 'upload',
            path:'/upload',
            icon: 'fa fa-cloud-upload',
            title: '文件上传'
        }, {
            icon: 'fa fa-icon-github',
            index: 'test',
            path: '/test',
            title: '测试'
        }
    ]
  }

]
export default nav
