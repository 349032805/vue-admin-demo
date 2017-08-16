<template>
  <div class="p-layout">
    <div class="p-layout-body">
      <aside class="p-layout-sider el-col el-col-4">
        <div class="p-layout-user">
          <img alt="" src="../images/1.jpg" class="p-layout-avatar">
          <div>userName</div>
        </div>
        <el-menu
          theme="dark"
          :unique-opened="true"
          :default-active="currentRoute"
          :router="true">
          <el-submenu
            :index="menu.name"
            v-for="(menu, index) in menus" :key="menu.name">
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
      </aside>
      <div class="p-layout-panel el-col el-col-20">
        <div class="p-layout-content">
          <div class="p-layout-container">
            <div class="p-layout-breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>

               <div class="p-layout-head">
                <el-dropdown class="is-user" @command="handleDropdown">
                  <img src="../images/1.jpg" class="p-layout-avatar" alt="">
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div> 

            </div>
            <div class="p-layout-inner">
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="p-layout-footer"> 版权所有 © 2017</div>
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
      currentRoute: this.$router.history.current.fullPath,
      isCollapse: false
    }
  },
  created () {
   
  },

  methods: {
    toggleSider () {
      this.isCollapse = !this.isCollapse
    },
    handleDropdown (cmd) {
      if (cmd === 'logout') {
        this.$router.replace({ name: 'login' })
      }
    }
  }
}
</script>

<style lang="less">
@light-black: #324057;
@extra-light-black: #475669;
@blue: #03a9f4;
@gray: #d3dce6;
@light-gray: #e5e9f2;
@top-height: 0;
@transition: all 0.3s ease;
@cont-padding: 15px;

.p-layout {
  &-avatar {
    border-radius: 50%;
    vertical-align: middle;
    cursor: pointer;
  }
  &-user {
    padding: 20px;
    text-align: center;
    color: #fff;
    .p-layout-avatar {
      width: 64px;
      height: 64px;
      margin-bottom: 10px;
    }
  }
  &-sider {
    background-color: rgb(50, 64, 87);
    min-height: 100%;
    z-index: 102;
    overflow-x: hidden;
  }
  &-panel,
  &-content {
    overflow-x: hidden;
    background: #f5f5f5;
  }

  &-collapse {
    float: left;
    width: @top-height;
    cursor: pointer;
    background-color: rgba(255, 255, 255, .1);
    text-align: center;
    color: #fff;
  }
  &-body {
    position: absolute;
    width: 100%;
    top: @top-height;
    bottom: 0;
    z-index: 100;
  }
  &-content {
    overflow-y: auto;
  }
  &-container {
    padding: 15px;
  }
  &-inner {
    padding: 10px;
    background: #fff;
    border-radius: 3px;
    margin-top: 10px;
  }
  &-breadcrumb {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    margin: -15px -15px 0 -15px;

    .p-layout-head {
      float: right;
      padding-right: 10px;
      .nav-item {
        margin-right: 10px;
        .fa {
          font-size: 20px;
        }
        .el-badge__content.is-fixed {
          top: 20px;
        }
      }
  }

  
    .p-layout-avatar {
      width: 36px;
      height: 36px;
      border: 2px solid @gray;
    }
  }

  &-footer {
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 12px;
    color: #999;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    width: 100%;
    display: none;
  }

  &-header {
    padding: 20px 10px;
    border-bottom: 1px solid #e9e9e9;
    background-color: @light-black;
    &:before,
    &:after {
      content: '';
      display: table;
    }
    &:after {
      clear: both;
    }
    .is-user {
      float: right;
    }
  }
}
</style>
