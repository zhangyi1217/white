<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">现代</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">经典</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">人文</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">科技</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">管理</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">杂志</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style scoped>

</style>
