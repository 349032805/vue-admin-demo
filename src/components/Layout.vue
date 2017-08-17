<template>
  <div class="p-layout">
      <!-- 左边导航 -->
      <div class="p-layout-sider">
        <el-menu theme="dark" :unique-opened="true" :default-active="currentRoute" :router="true">
          <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu :index="menu.name" v-for="(menu, index) in menus" :key="menu.name">
            <template slot="title">
              <i v-if="menu.icon" class="fa" :class="'fa-' + menu.icon"></i>
              <span class="nav-next">{{menu.text}}</span>
            </template>
            <el-menu-item
              :index="subMenu.path"
              v-for="(subMenu, subIndex) in menu.children" :key="subMenu.name">
                <i v-if="subMenu.icon" class="fa" :class="'fa-' + subMenu.icon"></i>
                <span class="nav-next">{{subMenu.text}}</span>
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <!-- 右边内容 -->
      <div class="p-layout-panel">
        <div class="p-layout-breadcrumb">
          <el-breadcrumb separator="/" class="float-left" style="line-height: inherit">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>

          <div class="p-layout-head">
            <el-dropdown class="is-user" @command="handleDropdown">
              <img src="../images/1.jpg" class="p-layout-avatar">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div> 
        </div>

          <div class="p-layout-container">
            <slot></slot>
          </div>
      </div>
  </div>
</template>
<script>
import menus from '../nav-config'

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

  methods: {
    handleDropdown (cmd) {
      if (cmd === 'logout') {
        this.$router.replace({ name: 'login' })
      }
    },
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
      }
    }
  }
  .p-layout-container {
    padding: 15px;
  }
}
</style>
