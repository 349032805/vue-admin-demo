const nav = [
  {
    icon: 'el-icon-star-on',
    index: 'index',
    path: '/index',
    title: '首页'
  },{
    icon: 'el-icon-menu',
    index: '2',
    title: '表格',
    subs: [
        {
            index: 'baseTable',
            path:'/baseTable',
            icon: '',
            title: '基础表格'
        }
    ]
  },{
    icon: 'el-icon-document',
    index: '3',
    title: '表单',
    subs: [
        {
            index: 'baseForm',
            path:'/baseForm',
            icon: '',
            title: '基本表单'
        },{
            index: 'editTinymce',
            path:'/editTinymce',
            icon: '',
            title: '编辑器tinymce'
        },{
            index: 'editQuill',
            path:'/editQuill',
            icon: '',
            title: '编辑器Quill'
        },{
            index: 'upload',
            path:'/upload',
            icon: '',
            title: '文件上传'
        }
    ]
  }, {
    icon: 'el-icon-more',
    index: 'test',
    path: '/test',
    title: '测试'
  }

]
export default nav
