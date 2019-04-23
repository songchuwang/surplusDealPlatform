<template>
  <div class="container">
    <div class="content">
      <div class="content-category">
        <div class="category-title">
          <img src="../assets/img/all_kinds_logo.png" alt="">
        </div>
        <div class="category-list">
          <ul>
            <li><a href="#">手机</a></li>
            <li><a href="#">笔记本电脑</a></li>
            <li><a href="#">平板</a></li>
            <li><a href="#">台式机</a></li>
            <li><a href="#">显示器</a></li>
            <li><a href="#">单反相机</a></li>
            <li><a href="#">手表</a></li>
            <li><a href="#">箱包</a></li>
            <li><a href="#">冰箱</a></li>
            <li><a href="#">洗衣机</a></li>
            <li><a href="#">教材</a></li>
            <li><a href="#">励志</a></li>
            <li><a href="#">化妆品</a></li>
            <li><a href="#">男装</a></li>
            <li><a href="#">女装</a></li>
            <li><a href="#">玩具</a></li>
            <li><a href="#">厨具</a></li>
            <li><a href="#">酒类</a></li>
          </ul>
        </div>
      </div>

      <div class="filter-title">
        <div class="filter-title-top">
          手机
        </div>
        <div class="filter-title-bottom">
          <ul>
            <li><a href="#">综合</a></li>
            <li><a href="#">最新发布</a></li>
            <li class="topBottomIcon"><a href="#">价格</a></li>
            <li>
              <el-checkbox fill="#ddd" v-model="checked">包邮</el-checkbox>
            </li>
          </ul>
        </div>
      </div>

      <div class="goods">
        <div class="item">
          <div class="goods-title">
            <div class="goods-title-img">
              <img src="http://placehold.it/30x30" alt="">
              <h5>songchuwang</h5>
            </div>
            <div class="goods-title-time">32分钟前来过</div>
          </div>
          <div class="goods-img">
            <img src="../assets/img/good_example.png" alt="">
          </div>
          <div class="goods-text">
            <p>Apple 苹果6 iPhone6 手机 金色 全网通 (32GB)</p>
            <p>金色 全网通 (32GB) 机子买来一年多点，没有配件，只有裸机，刚换了原装个电池峰值100，自己不怎么爱护，后壳有划伤，机子绝对没有问题，外观要求不高的值得入手</p>
          </div>
          <div class="goods-price">
            <div class="reality-price">
              <i>￥</i>
              <span>1989</span>
            </div>
            <div class="original-price">
              <i>￥</i>
              <span>2998</span>
            </div>
          </div>
          <div class="goods-site">
            <img src="../assets/img/location.png" alt="">
            <div>广东深圳市 宝安区</div>
          </div>
        </div>
        <div class="item">
          <div class="goods-title">
            <div class="goods-title-img">
              <img src="http://placehold.it/30x30" alt="">
              <h5>songchuwang</h5>
            </div>
            <div class="goods-title-time">32分钟前来过</div>
          </div>
          <div class="goods-img">
            <img src="../assets/img/good_example.png" alt="">
          </div>
          <div class="goods-text">
            <p>Apple 苹果6 iPhone6 手机 金色 全网通 (32GB)</p>
            <p>金色 全网通 (32GB) 机子买来一年多点，没有配件，只有裸机，刚换了原装个电池峰值100，自己不怎么爱护，后壳有划伤，机子绝对没有问题，外观要求不高的值得入手</p>
          </div>
          <div class="goods-price">
            <div class="reality-price">
              <i>￥</i>
              <span>1989</span>
            </div>
            <div class="original-price">
              <i>￥</i>
              <span>2998</span>
            </div>
          </div>
          <div class="goods-site">
            <img src="../assets/img/location.png" alt="">
            <div>广东深圳市 宝安区</div>
          </div>
        </div>
        <div class="item">
          <div class="goods-title">
            <div class="goods-title-img">
              <img src="http://placehold.it/30x30" alt="">
              <h5>songchuwang</h5>
            </div>
            <div class="goods-title-time">32分钟前来过</div>
          </div>
          <div class="goods-img">
            <img src="../assets/img/good_example.png" alt="">
          </div>
          <div class="goods-text">
            <p>Apple 苹果6 iPhone6 手机 金色 全网通 (32GB)</p>
            <p>金色 全网通 (32GB) 机子买来一年多点，没有配件，只有裸机，刚换了原装个电池峰值100，自己不怎么爱护，后壳有划伤，机子绝对没有问题，外观要求不高的值得入手</p>
          </div>
          <div class="goods-price">
            <div class="reality-price">
              <i>￥</i>
              <span>1989</span>
            </div>
            <div class="original-price">
              <i>￥</i>
              <span>2998</span>
            </div>
          </div>
          <div class="goods-site">
            <img src="../assets/img/location.png" alt="">
            <div>广东深圳市 宝安区</div>
          </div>
        </div>
        <div class="item">
          <div class="goods-title">
            <div class="goods-title-img">
              <img src="http://placehold.it/30x30" alt="">
              <h5>songchuwang</h5>
            </div>
            <div class="goods-title-time">32分钟前来过</div>
          </div>
          <div class="goods-img">
            <img src="../assets/img/good_example.png" alt="">
          </div>
          <div class="goods-text">
            <p>Apple 苹果6 iPhone6 手机 金色 全网通 (32GB)</p>
            <p>金色 全网通 (32GB) 机子买来一年多点，没有配件，只有裸机，刚换了原装个电池峰值100，自己不怎么爱护，后壳有划伤，机子绝对没有问题，外观要求不高的值得入手</p>
          </div>
          <div class="goods-price">
            <div class="reality-price">
              <i>￥</i>
              <span>1989</span>
            </div>
            <div class="original-price">
              <i>￥</i>
              <span>2998</span>
            </div>
          </div>
          <div class="goods-site">
            <img src="../assets/img/location.png" alt="">
            <div>广东深圳市 宝安区</div>
          </div>
        </div>
        <div class="item">
          <div class="goods-title">
            <div class="goods-title-img">
              <img src="http://placehold.it/30x30" alt="">
              <h5>songchuwang</h5>
            </div>
            <div class="goods-title-time">32分钟前来过</div>
          </div>
          <div class="goods-img">
            <img src="../assets/img/good_example.png" alt="">
          </div>
          <div class="goods-text">
            <p>Apple 苹果6 iPhone6 手机 金色 全网通 (32GB)</p>
            <p>金色 全网通 (32GB) 机子买来一年多点，没有配件，只有裸机，刚换了原装个电池峰值100，自己不怎么爱护，后壳有划伤，机子绝对没有问题，外观要求不高的值得入手</p>
          </div>
          <div class="goods-price">
            <div class="reality-price">
              <i>￥</i>
              <span>1989</span>
            </div>
            <div class="original-price">
              <i>￥</i>
              <span>2998</span>
            </div>
          </div>
          <div class="goods-site">
            <img src="../assets/img/location.png" alt="">
            <div>广东深圳市 宝安区</div>
          </div>
        </div>
        <div class="item">
          <div class="goods-title">
            <div class="goods-title-img">
              <img src="http://placehold.it/30x30" alt="">
              <h5>songchuwang</h5>
            </div>
            <div class="goods-title-time">32分钟前来过</div>
          </div>
          <div class="goods-img">
            <img src="../assets/img/good_example.png" alt="">
          </div>
          <div class="goods-text">
            <p>Apple 苹果6 iPhone6 手机 金色 全网通 (32GB)</p>
            <p>金色 全网通 (32GB) 机子买来一年多点，没有配件，只有裸机，刚换了原装个电池峰值100，自己不怎么爱护，后壳有划伤，机子绝对没有问题，外观要求不高的值得入手</p>
          </div>
          <div class="goods-price">
            <div class="reality-price">
              <i>￥</i>
              <span>1989</span>
            </div>
            <div class="original-price">
              <i>￥</i>
              <span>2998</span>
            </div>
          </div>
          <div class="goods-site">
            <img src="../assets/img/location.png" alt="">
            <div>广东深圳市 宝安区</div>
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
  .container {
    .content {
      width: 1190px;
      position: relative;

      .content-category {
        width: 100%;
        height: 140px;
        margin: 20px 0;
        background: #fff;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .category-title {
          width: 140px;
          height: 140px;

          img {
            width: 70px;
            height: 20px;
            position: relative;
            top: 26px;
            left: 50px;
          }
        }

        .category-list {
          ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 910px;
            height: 100px;
            position: relative;
            top: 18px;
            left: 20px;
            flex-wrap: wrap;
            margin: 0;

            li {
              list-style: none;
              width: 12%;
              height: 35px;
              line-height: 35px;
              margin-right: 4.6%;

              a {
                color: #666;

                &:hover {
                  color: rgba(255, 52, 52, .5);
                }
              }
            }
          }
        }
      }

      .filter-title {
        width: 1190px;
        height: 100px;
        background: #fff;

        .filter-title-top {
          width: 100%;
          height: 50px;
          border-bottom: 1px solid #eee;
          line-height: 50px;
          padding-left: 55px;
          box-sizing: border-box;
          font-size: 18px;
          font-weight: bolder;
        }

        .filter-title-bottom {
          width: 100%;
          height: 50px;
          line-height: 50px;
          box-sizing: border-box;
          padding-left: 55px;
          position: relative;

          ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            li {
              list-style: none;
              margin-right: 45px;
              position: relative;

              a {
                color: #666;
              }

            }
          }

          .topBottomIcon::before {
            content: "";
            position: absolute;
            top: 14px;
            right: -13px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-bottom-color: #909399;

          }

          .topBottomIcon::after {
            content: "";
            position: absolute;
            top: 28px;
            right: -13px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-top-color: #909399;

          }
        }
      }

      .goods {
        width: 1190px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 10px;
        flex-wrap: wrap;

        .item {
          margin-top: 10px;
          width: 290px;
          height: 500px;
          background: #fff;
          margin-right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;

          &:nth-child(4n) {
            margin-right: 0;
          }

          .goods-title {
            width: 290px;
            height: 60px;
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .goods-title-img {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              width: 66%;

              h5 {
                font-weight: bolder;
                color: #333;
              }

              img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 10px;
              }
            }

            .goods-title-time {
              color: #999;
              font-size: 12px;
              float: right;
              height: 30px;
              line-height: 30px;
              font-family: jdzh-r;
            }
          }

          .goods-img {
            width: 290px;
            height: 290px;
            box-sizing: border-box;
            overflow: hidden;

            img {
              width: 290px;
              height: 290px;
            }
          }

          .goods-text {
            width: 290px;
            height: 70px;
            box-sizing: border-box;
            padding: 10px;

            p {
              width: 100%;
              height: 20px;
              line-height: 20px;
              margin-bottom: 5px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              &:first-child {
                font-weight: bolder;
              }

              &:last-child {
                font-size: 12px;
                color: #999;
              }
            }
          }

          .goods-price {
            width: 100%;
            height: 38px;
            padding: 0 10px 15px 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            .reality-price {
              margin: 0;
              padding: 0;

              i {
                font-style: normal;
                font-size: 12px;
                color: #ff3434;
                margin-right: -5px;
              }

              span {
                font-size: 20px;
                color: #ff3434;
                margin: 0;
              }
            }

            .original-price {
              margin: 0;
              padding: 0;
              text-decoration: line-through;
              margin-left: 20px;
              height: 23px;
              line-height: 23px;
              margin-top: 3px;

              i {
                font-style: normal;
                font-size: 12px;
                color: #666;
                margin-right: -5px;
              }

              span {
                font-size: 14px;
                color: #666;
                margin: 0;
              }
            }
          }

          .goods-site {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;
            padding: 0 10px;
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding-bottom: 10px;

            img {
              width: 13px;
              height: 15px;
              margin-right: 10px;
              margin-left: 2px;
            }

            div {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }

</style>
