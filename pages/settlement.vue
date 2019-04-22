<template>
  <div class="container">
    <div class="content">
      <h2>收货信息</h2>
      <div class="take-good-infors">
        <div class="item">
          <div class="person">宋楚望
            <img src="../assets/img/selected.png" alt="">
          </div>
          <div class="ad-detail">
            <p style="padding-left:30px">广东深圳市宝安区西乡街道共乐下塘二巷2号</p>
            <p>153****1156</p>
            <i>默认地址</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .content {
    width: 1190px;
    padding: 30px;
    box-sizing: border-box;
    height: 450px;
    background: #fff;

    h2 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .item {
      width: 1130px;
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .person {
        width: 136px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #fc5247;
        color: #fc5247;
        position: relative;
        margin-right: 5px;
        box-sizing: border-box;

        img {
          position: absolute;
          left: 100%;
          top: 100%;
          margin-top: -23px;
          margin-left: -23px;
        }
      }

      .ad-detail {
        width: 980px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        p {
            margin-right: 20px;
        }
        &:hover{
            background: #f9f9f9;
        }
        i{
            display: inline-block;
            width: 72px;
            height: 24px;
            line-height: 24px;
            background: #d4d4d4;
            text-align: center;
            font-size: 12px;
            color: #fff;
        }
      }

    }
  }

</style>
