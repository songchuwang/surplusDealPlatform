<template>
  <el-container class="layout-default">
    <el-header height="80px">
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="100%">
      <my-footer />
    </el-footer>
  </el-container>
</template>
<script>
  import MyHeader from "@/components/public/header/index"
  import MyFooter from "@/components/public/footer/index"
  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }

</script>
<style lang="scss" scoped>
  .layout-default {
    .el-footer {
      width: 100%;
      background: #fff;
      margin-top: 80px;

      .footer {
        width: 100%;
        text-align: left;
        height: 180px;
        line-height: 180px;
        .footer-inner {
          
          width: 1190px;
          height: 180px;
          line-height: 180px;
          margin: 0 auto;
        }
      }
    }
  }

</style>
