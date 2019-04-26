<template>
  <div class="container">
    <div class="content">
      <div class="fore">
        <h4>个人中心</h4>
        <div @click="showPage('1')" class="toPage">个人闲置</div>
        <div @click="showPage('2')" class="toPage">我的订单</div>
        <div @click="showPage('3')" class="toPage">忘记密码</div>
      </div>
      <div class="page">
        <div v-if="isShowPage == 1" class="page-switch page-one">
          <section class="header">
            <div class="header-img">
              <div class="img">
                <img src="../assets/img/personal.jpg" alt="">
              </div>
              <div class="name">songchuwang</div>
            </div>
            <div class="header-content">
              <div class="header">我的管理</div>
              <div></div>
            </div>
          </section>

          <section class="content">
            <div class="surplus">我的闲置</div>
            <div class="select">
              <div>已发布</div>
              <div>已卖出</div>
            </div>
            <div class="content-inner"></div>
          </section>

        </div>
        <div v-if="isShowPage == 2" class="page-switch page-two">
          <div class="content">
            <div class="header">
              我的订单
            </div>
            <div class="header-nav">
              <el-tabs style="width:1000px" type="border-card" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane style="width:250px" label="全部" name="first">
                  <div class="container">
                    <div class="header"></div>
                    <div class="content"></div>
                    <div class="footer"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="待发货" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="待收货" name="fourth">定时任务补偿</el-tab-pane>
              </el-tabs>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div v-if="isShowPage == 3" class="page-switch page-three">
          <div class="content">
            <div class="header">
              忘记密码
            </div>
            <div class="content-detail">
              <p>请联系客服 400-612-2333</p>
              <p>或发送邮件至 lidongqing@paipai.com <span class="round-btn">发送邮件</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowPage: 1,
        activeName: 'second',
        goodsInfor: '',
        orders: ''
      }
    },
    created () {
      this.getOrder()
    },
    methods: {
      showPage(index) {
        this.isShowPage = index;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getOrder() {
        let id = this.$store.state.geo.userId
        this.$axios.post('/goods/getorder', {
          id
        }).then(res => {
          console.log(res.data)
        })
      }
    },
    mounted() {
      this.$axios.post('/goods/getGoodInfor', {
        _id: this.$route.query.buy
      }).then(res => {
        this.goodsInfor = res.data.data
        // console.log(this.goodsInfor);
        this.isShowPage = 2;
      })
    },
  }

</script>

<style lang="scss" scoped>
  .container {
    .content {
      width: 1190px;
      position: relative;

      .fore {
        width: 170px;
        height: 160px;
        box-sizing: border-box;
        padding: 15px 20px;
        position: absolute;
        top: -20px;
        margin-right: 20px;
        background: #fff;

        h4 {
          font-size: 16px;
          font-weight: bolder;
          margin-bottom: 10px;
        }

        div {
          width: 130px;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          cursor: pointer;

          &:hover {
            color: #01c30b;
          }
        }
      }

      .page {
        width: 1000px;
        margin-left: 190px;
        margin-top: 20px;
        position: relative;

        .page-one {
          width: 100%;

          .header {
            width: 100%;
            height: 250px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            .header-img {
              width: 250px;
              height: 250px;
              background: #01c30b;
              position: relative;

              .img {
                width: 56px;
                height: 56px;
                position: absolute;
                top: 38%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 4px solid #fff;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                img {
                  width: 56px;
                  height: 56px;
                  border-radius: 50%;
                }
              }

              .name {
                font-size: 18px;
                font-weight: 700;
                color: #fff;
                position: absolute;
                top: 62%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .header-content {
              width: 750px;
              height: 225px;
              background: #fff;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;

              .header {
                width: 100%;
                height: 55px;
                line-height: 55px;
                box-sizing: border-box;
                padding-left: 20px;
                border-bottom: 1px solid #f0f3ef;
              }
            }
          }

          .content {
            width: 1000px;
            background: #fff;
            margin-top: 20px;

            .surplus {
              width: 100%;
              box-sizing: border-box;
              height: 55px;
              line-height: 55px;
              padding-left: 20px;
              border-bottom: 1px solid #f0f3ef;
              font-size: 16px;
            }

            .select {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              box-sizing: border-box;

              >div {
                width: 50%;
                height: 55px;
                line-height: 55px;
                text-align: center;
                box-sizing: border-box;
                border-bottom: 1px solid #f0f3ef;

                &:first-child {
                  border-right: 1px solid #f0f3ef;
                }
              }
            }

            .content-inner {
              width: 100%;
              height: 800px;
            }

          }

        }

        .page-two {
          width: 100%;
          height: 500px;
          background: #fff;

          .content {
            .header {
              width: 100%;
              height: 90px;
              padding: 20px 0 20px 20px;
              box-sizing: border-box;
              font-size: 22px;
              line-height: 50px;
            }

            .header-nav {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 1000px;

              ul {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 1000px;

                li {
                  list-style: none;
                  width: 20%;
                  height: 66px;
                  line-height: 66px;
                  text-align: center;
                  font-size: 20px;
                  font-weight: 600;
                }
              }

            }
          }
        }

        .page-three {
          //   margin-top: -20px;
          position: relative;
          width: 1000px;
          height: 400px;
          background: #fff;

          .content {
            .header {
              width: 100%;
              height: 90px;
              padding: 20px 0 20px 20px;
              box-sizing: border-box;
              font-size: 22px;
              line-height: 50px;
            }

            .content-detail {
              box-sizing: border-box;
              padding-left: 20px;

              p {
                line-height: 28px;
                font-size: 14px;
                color: #666;

                .round-btn {
                  display: inline-block;
                  width: 64px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 12px;
                  border: 1px solid #979797;
                  color: #979797;
                  text-align: center;
                  border-radius: 10px;
                  margin-left: 10px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
