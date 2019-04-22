<template>
  <div class="container">
    <el-breadcrumb style="height:60px;line-height: 60px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="content-left">
        <div class="img-box">
          <img src="http://placehold.it/520x520" alt="">
        </div>
        <div class="preview-box">

        </div>
      </div>
      <div class="content-right">
        <div class="good-title">
          <h4>灯饰五个</h4>
        </div>
        <div class="good-price">
          <div class="sale-price">
            <div class="text">售卖价：</div>
            <span class="price-icon">￥</span>
            <span class="price">300</span>
          </div>
          <div class="production-price">
            <div class="text">原价：</div>
            <span class="price-line-through"> <span style="font-size:14px">￥</span>000</span>
          </div>
          <div class="sale-address">
            <div class="text">发布地：</div>
            <span>重庆 九龙坡区</span>
          </div>
          <div class="label">
            <span>包邮</span>
            <span>几乎全新</span>
            <span>无发票</span>
          </div>
        </div>
        <div class="business-message">
          <div class="message-detail">
            <div class="avatar">
              <img src="../assets/img/avatar.png" alt="">
            </div>
            <div class="detail">
              <span class="name">前后左右端工程师</span>
            </div>
          </div>
          <div class="contact">
            <!-- settlement -->
            <div>
              <nuxt-link to="/settlement">立即购买</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-detail">
      <div class="detail-left">
        <div class="title">
          <img src="../assets/img/title_detail_description.png" alt="">
        </div>
        <p>因为感觉和装修风格不搭，所以几个灯一起转出，风格独特，有情调。</p>
        <div class="img-description">
          <ul>
            <li><img src="../assets/img/example.jpg" alt=""></li>
            <li><img src="../assets/img/example.jpg" alt=""></li>
            <li><img src="../assets/img/example.jpg" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="detail-right">

      </div>
    </div>

  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .container {
    .content {
      width: 1190px;
      height: 680px;
      box-sizing: border-box;
      padding: 30px;
      background: #fff;

      .content-left {
        width: 520px;
        height: 620px;
        //   margin-right: 40px;
        box-sizing: border-box;
        float: left;

        .img-box {
          width: 520px;
          height: 520px;
          margin-bottom: 10px;
        }

        .preview-box {
          width: 520px;
          height: 88px;
          background: red;
        }
      }

      .content-right {
        width: 578px;
        height: 620px;
        float: left;
        box-sizing: border-box;
        padding-left: 40px;

        .good-title {
          font-size: 20px;
          color: #333;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        .good-price {
          padding: 25px 30px;
          background: #f7f7f7;
          box-sizing: border-box;
          width: 578px;
          height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          .label {
            span {
              display: inline-block;
              padding: 2px 4px;
              height: 18px;
              line-height: 18px;
              margin-right: 10px;
              border-radius: 2px;
              border: 1px solid #ff3434;
              font-size: 12px;
              color: #ff3434;
            }
          }

          >div {
            width: 100%;
            margin-right: 20px;
            height: 30px;
            line-height: 30px;

            //   display: flex;
            //   flex-direction: row;
            //   justify-content: center;
            .price-line-through {
              text-decoration: line-through;
              font-family: jdzh-r;
              font-size: 20px;
              text-decoration: line-through;
              color: #666;
              line-height: 20px;
            }

            .text {
              width: 52px;
              margin-right: 20px;
              white-space: nowrap;
              float: left;
              font-size: 14px;
              margin-right: 24px;
              color: #999;
            }

            .price-icon {
              font-size: 16px;
              font-weight: 700;
              color: #ff3434;
              line-height: 28px;
              font-family: jdzh-r;
            }

            .price {
              font-family: jdzh-r;
              font-size: 28px;
              font-weight: 700;
              color: #ff3434;
              line-height: 28px;
            }
          }

        }

        .business-message {
          margin-top: 10px;
          width: 578px;
          height: 163px;
          box-sizing: border-box;
          border: 1px solid #e9e9e9;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px 30px 16px 30px;

          .message-detail {
            width: 516px;
            height: 69px;
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: flex-start;
            border-bottom: 1px dotted #ccc;

            .avatar {
              width: 48px;
              height: 48px;

              img {
                width: 48px;
                height: 48px;
              }
            }

            .detail {
              margin-left: 16px;
              height: 48px;
              line-height: 48px;
            }
          }

          .contact {
            width: 128px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #ff3434;
            color: #fff;
            font-family: jdzh-r;
            font-size: 20px;
            font-weight: 500;

            a {
              display: inline-block;
              width: 128px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              background: #ff3434;
              color: #fff;
              font-family: jdzh-r;
              font-size: 20px;
              font-weight: 500;
            }
          }
        }
      }
    }

    .content-detail {
      width: 1190px;
      margin-top: 20px;


      .detail-left {
        width: 790px;
        padding: 40px 80px 40px 80px;
        box-sizing: border-box;
        min-height: 500px;
        background: #fff;

        .title {
          width: 630px;
          height: 30px;
          text-align: center;
          line-height: 30px;

          img {
            width: 120px;
            height: 27px;
          }
        }

        p {
          font-size: 14px;
          line-height: 24px;
          color: #333;
          letter-spacing: 1px;
          margin-top: 22px;
        }

        .img-description {
          width: 630px;

          ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            li {
              width: 630px;
              height: 630px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
            }
          }

        }

      }

      .detail-right {}

    }


  }

</style>
