<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="2">
      <div class="logo">
        <nuxt-link to="/">
          <img style="width:78px;height:34px" src="../../../assets/img/logo.png" alt="">
        </nuxt-link>
      </div>
    </el-col>
    <el-col :span="3">
      <geo />
    </el-col>
    <el-col :span="5" :offset="14">
      <user />
    </el-col>
  </el-row>
</template>

<script>
  import Geo from "./geo"
  import User from "./user"
  export default {
    components: {
      Geo,
      User
    }
  }

</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/index.scss";

  .logo {
    height: 80px;
    line-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a{
      
      height: 80px;
    line-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
  }

</style>
