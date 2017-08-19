<template>
  <div class="p-layout">
      <!-- 左边导航 -->
      <div class="p-layout-sider">

       <!-- <el-menu theme="dark" :unique-opened="true" :default-active="currentRoute" :router="true" @open="handleOpen" @close="handleClose">
        <el-menu-item index="index"><i class="fa fa-home fa-lg"></i> 首页</el-menu-item>
        <el-submenu :index="menu.text" v-for="(menu, index) in menus" :key="menu.index">
          <template slot="title">
            <i v-if="menu.icon" class="fa" :class="'fa-' + menu.icon"></i>
            <span class="nav-next">{{menu.text}}</span>
          </template>
          <el-menu-item
            :index="subMenu.path"
            v-for="(subMenu, subIndex) in menu.children" :key="subMenu.index">
              <i v-if="subMenu.icon" class="fa" :class="'fa-' + subMenu.icon"></i>
              <span class="nav-next">{{subMenu.text}}</span>
            </el-menu-item>
        </el-submenu>
      </el-menu>    -->

       <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in menus">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i> {{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                          <i :class="subItem.icon"></i> {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i> {{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu> 



      </div>

      <!-- 右边内容 -->
      <div class="p-layout-panel">
        <!-- 关于面包屑导航的处理,github上有的在每个页面设置写死的导航,有的用vuex进行的复杂处理.
        个人感觉最好的方式是在左侧的导航的时候,通过封装的组建获取子菜单的和父菜单的名称传入,
        在这里尝试监听路由变化来判断当前的完整导航,参见main.js -->
        <!-- 有更好的方法请告诉我,@qq 349032805 -->
        <div class="p-layout-breadcrumb">
           <el-breadcrumb separator="/" class="float-left" style="line-height: inherit">
            <el-breadcrumb-item :to="{ path: '/index' }" v-if="!$menuArr || $menuArr.length==0"><span class="first-page">首页</span></el-breadcrumb-item>
            <el-breadcrumb-item v-for="nav in $menuArr" :key="nav.index">{{nav}}</el-breadcrumb-item>
          </el-breadcrumb> 

          <div class="p-layout-head">
            <el-dropdown class="is-user" @command="handleDropdown">
              <img src="../images/leaf.jpg" class="p-layout-avatar"> 
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span class="nickname">fantasy</span>
          </div> 
        </div>

          <div class="p-layout-container">
            <slot></slot>
          </div>
      </div>
  </div>
</template>
<script>
// import menus from '../nav-config'
import menus from '../nav-config2'

export default {
  name: 'p-layout',

  data () {
    return {
      menus,
      currentRoute: this.$router.history.current.fullPath
    }
  },
  created () {
   
  },
  computed:{
    onRoutes(){
        return this.$route.path.replace('/','');
    }
  },
  methods: {
    handleDropdown (cmd) {
      if (cmd === 'logout') {
        this.$router.replace({ name: 'login' })
      }
    },
     handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
  }
}
</script>

<style lang="less">
.p-layout {
  height: 100%;
  width: 100%;

  .p-layout-sider {
    background-color: rgb(50, 64, 87);
    min-height: 100%;
    width: 16%;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
  }

  .p-layout-panel {
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;
    padding-left: 16%;

    .p-layout-breadcrumb {
      height: 60px;
      line-height: 60px;
      background-color: #eff2f7;
      padding-left: 20px;
      padding-right: 30px;

      .first-page{
        color:#48576a;
      }

      .p-layout-head {
        float: right;
        .p-layout-avatar {
          width: 36px;
          height: 36px;
          border: 2px solid #d3dce6;
          border-radius: 50%;
          vertical-align: middle;
          cursor: pointer;
        }
        .nickname {
          margin-left:5px;
          color: #666;
        }
      }
    }
  }
  .p-layout-container {
    padding: 15px 20px;
  }
}
</style>
