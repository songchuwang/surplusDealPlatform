<template>
  <div class="footer">
    <div class="footer-inner">
      <img src="../../../assets/img/bottom_log.png" alt="">
    </div>
    <div class="foot-bar">
      <p><a href="#">关于拍拍</a> | <a href="#">联系我们</a></p>
      <p class="bottom-tips"><span>粤ICP备13011462号-2</span><span>客服电话：400-612-2333</span><span>Copyright©2017-2018 拍拍paipai.com版权所有</span></p>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    background: #fff;

    .footer-inner {
      width: 1190px;
      height: 180px;
      line-height: 180px;
      margin: 0 auto;

      img {
        width: 530px;
        height: 40px;
      }
    }

    .foot-bar {
      height: 102px;
      background: #2e2e2e;

      p {
        text-align: center;
        color: #999;
        padding-top: 30px;
        font-size: 12px;
        a {
          display: inline-block;
          text-align: center;
          color: #999;
          width: 90px;
          height: 16px;
          line-height: 16px;
        }
      }
      .bottom-tips {
        padding: 0;
        margin-top: 6px;
        span{
          display: inline-block;
          padding: 0 10px;
        }
      }
    }
  }

</style>
