<template>
  <el-container>
    <el-asde style="width: 200px; margin-top: 20px">
      <switch></switch>
      <SideMenu></SideMenu>
    </el-asde>
    <el-main>
      <BooksDetails class="books-area"></BooksDetails>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import BooksDetails from './BooksDetails'
export default {
  name: 'BookIndex',
  components: {SideMenu, BooksDetails}
}
</script>

<style scoped>
  .books-area{
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
