<template>
  <el-container>
    <el-container>
      <el-aside>
        <center>
          <el-menu default-active="1" style="width: 170px;margin-top: 60px;">
            <a href="">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">技术选型</span>
              </el-menu-item>
            </a>
            <a href="">
              <el-menu-item index="2">
                <i class="el-icon-chat-line-square"></i>
                <span slot="title">我的博客</span>
              </el-menu-item>
            </a>
            <a href="">
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">我的日记</span>
              </el-menu-item>
            </a>
            <a href="">
              <el-menu-item index="4">
                <i class="el-icon-collection"></i>
                <span slot="title">我的相册</span>
              </el-menu-item>
            </a>
          </el-menu>
        </center>
      </el-aside>
      <el-main >
        <img src="../../assets/logo.png" height="200" width="200"/>
        <span>渐进式 JavaScript 框架</span>
      </el-main>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Appindex'
}
</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 600px;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 600px;
    float: left;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .box-card{
    width: 200px;
  }
</style>
