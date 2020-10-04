<template>
  <el-container>
    <el-asde style="width: 200px; margin-top: 20px">
      <switch></switch>
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-asde>
    <el-main>
      <BooksDetails class="books-area" ref="bookArea"></BooksDetails>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import BooksDetails from './BooksDetails'
export default {
  name: 'BookIndex',
  components: {SideMenu, BooksDetails},
  methods: {
    listByCategory () {
      var _this = this
      var cid = this.$refs.sideMenu.cid
      var url = 'categories/' + cid + '/books'
      this.$axios.get(url).then(resp => {
        if (resp && resp.status === 200) {
          _this.$refs.booksArea.books = resp.data
        }
      })
    }
  }
}
</script>

<style scoped>
  .books-area{
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
