<template>
  <el-menu
  :default-active="'/index'"
  router
  mode="horizontal"
  background-color="white"
  text-color="#222"
  active-text-color="blue"
  style="min-width: 100%;"
  >
    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
      {{item.navItem }}
    </el-menu-item>
    <el-icon-menu/>
    <a href="nowhere" style="color: #222; float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float: right; font-size: 30px; color: #222;padding-top: 12px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold;">常熟理工学院</span>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/notebook', navItem: '写日记'},
        {name: '/books', navItem: '我的书单'},
        {name: '/admin', navItem: '个人中心'}
      ]
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
  }
  span{
    pointer-events: none;
  }
</style>
