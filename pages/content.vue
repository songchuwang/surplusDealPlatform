<template>
  <div class="container">
    <div class="content">
      <article class="content-left">
        <div class="category">
          <ul class="category-ul">
            <li>
              <span class="popular">热门</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                  <a href="#">手机</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">笔记本电脑</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">手机数码</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">手机</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">耳机耳麦</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">电脑办公</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">笔记本</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">平板电脑</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">电脑配件</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">显示器</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">显卡</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">摄影摄像</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">单反相机</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">微单相机</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">奢侈品</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">手表</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">箱包</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">家用电器</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">冰箱</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">洗衣机</a>
                </nuxt-link>
              </div>
            </li>
            <li>
              <span class="popular">图书</span>
              <div class="category-details">
                <nuxt-link to="/goodsList">
                <a href="#">教材</a>
                </nuxt-link>
                <nuxt-link to="/goodsList">
                <a href="#">励志</a>
                </nuxt-link>
              </div>
            </li>
          </ul>
          <nuxt-link to="/goodsList">
          <a class="see-more" href="#">查看更多</a>
          </nuxt-link>
        </div>
        <div class="slide">
          <!-- <img src="../assets/img/slide_1.png" alt=""> -->
          <div class="block">
            <el-carousel height="432px">
              <el-carousel-item v-for="(item, index) in banner_list" :key="index">
                <img :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </article>
      <section class="content-right">
        <div class="content-right-top">
          <nuxt-link to="/release">
            <img src="../assets/img/entrance.png" alt="">
          </nuxt-link>
        </div>
        <div class="content-right-bottom">
          <a>
            <img src="../assets/img/ad.png" alt="">
          </a>
        </div>
      </section>
    </div>
    <div class="sale">
      <div class="title-sale">
        <img src="../assets/img/title_sale.png" alt="">
      </div>
      <div class="content-sale">
        <ul>
          <nuxt-link to="/release">
            <li><a href="#"><img src="../assets/img/sale_entrance1.png" alt=""></a></li>
          </nuxt-link>
          <nuxt-link to="/release">
            <li><a href="#"><img src="../assets/img/sale_entrance2.png" alt=""></a></li>
          </nuxt-link>
          <nuxt-link to="/release">
            <li><a href="#"><img src="../assets/img/sale_entrance3.png" alt=""></a></li>
          </nuxt-link>
          <nuxt-link to="/release">
            <li><a href="#"><img src="../assets/img/sale_entrance4.png" alt=""></a></li>
          </nuxt-link>
        </ul>
      </div>
    </div>
    <div class="buy">
      <div class="title-buy">
        <img src="../assets/img/title_buy.png" alt="">
      </div>
      <div class="buy-item">
        <div class="buy-item-header">
          <h4>大家电</h4>
        </div>
        <!-- 单项 -->
        <div class="buy-item-inner-item">
          <div class="nogoods" v-if="this.large_appliances.length == 0">
            <div>暂无该类商品发布，点击去发布闲置商品吧</div>
            <nuxt-link to="/release">
              <img src="../assets/img/entrance.png" alt="">
            </nuxt-link>
          </div>
          <ul v-else>

            <li v-for="(item, index) in large_appliances" :key="index">
              <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
                <!-- <nuxt-link :to =`/goodsDetails/${index}`> -->
                <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">
              </nuxt-link>
              <p class="item-header">{{item.gname}}</p>
              <span class="item-description">{{item.desc}}</span>
              <span class="item-price">￥{{item.sale_price}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="buy-item">
        <div class="buy-item-header">
          <h4>家装软饰</h4>
        </div>
        <!-- 单项 -->
        <div class="buy-item-inner-item">
          <div class="nogoods" v-if="this.decoration.length == 0">
            <div>暂无该类商品发布，点击去发布闲置商品吧</div>
            <nuxt-link to="/release">
              <img src="../assets/img/entrance.png" alt="">
            </nuxt-link>
          </div>
          <ul v-else>
            <li v-for="(item, index) in decoration" :key="index">
              <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
                <!-- <nuxt-link :to =`/goodsDetails/${index}`> -->
                <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">
              </nuxt-link>
              <p class="item-header">{{item.gname}}</p>
              <span class="item-description">{{item.desc}}</span>
              <span class="item-price">￥{{item.sale_price}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="buy-item">
        <div class="buy-item-header">
          <h4>生活电器</h4>
        </div>
        <!-- 单项 -->
        <div class="buy-item-inner-item">
          <div class="nogoods" v-if="this.living_appliances.length == 0">
            <div>暂无该类商品发布，点击去发布闲置商品吧</div>
            <nuxt-link to="/release">
              <img src="../assets/img/entrance.png" alt="">
            </nuxt-link>
          </div>
          <ul v-else>
            <li v-for="(item, index) in living_appliances" :key="index">
              <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
                <!-- <nuxt-link :to =`/goodsDetails/${index}`> -->
                <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">
              </nuxt-link>
              <p class="item-header">{{item.gname}}</p>
              <span class="item-description">{{item.desc}}</span>
              <span class="item-price">￥{{item.sale_price}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="buy-item">
        <div class="buy-item-header">
          <h4>厨房小电</h4>
        </div>
        <!-- 单项 -->
        <div class="buy-item-inner-item">
          <div class="nogoods" v-if="this.book.length == 0">
            <div>暂无该类商品发布，点击去发布闲置商品吧</div>
            <nuxt-link to="/release">
              <img src="../assets/img/entrance.png" alt="">
            </nuxt-link>
          </div>
          <ul v-else>
            <li v-for="(item, index) in book" :key="index">
              <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
                <!-- <nuxt-link :to =`/goodsDetails/${index}`> -->
                <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">
              </nuxt-link>
              <p class="item-header">{{item.gname}}</p>
              <span class="item-description">{{item.desc}}</span>
              <span class="item-price">￥{{item.sale_price}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="buy-item">
        <div class="buy-item-header">
          <h4>手机通讯</h4>
        </div>
        <!-- 单项 -->
        <div class="buy-item-inner-item">
          <div class="nogoods" v-if="this.phoneList.length == 0">
            <div>暂无该类商品发布，点击去发布闲置商品吧</div>
            <nuxt-link to="/release">
              <img src="../assets/img/entrance.png" alt="">
            </nuxt-link>
          </div>
          <ul v-else>
            <li v-for="(item, index) in phoneList" :key="index">
              <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
                <!-- <nuxt-link :to =`/goodsDetails/${index}`> -->
                <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">
              </nuxt-link>
              <p class="item-header">{{item.gname}}</p>
              <span class="item-description">{{item.desc}}</span>
              <span class="item-price">￥{{item.sale_price}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="buy-item">
        <div class="buy-item-header">
          <h4>数码配件</h4>
        </div>
        <!-- 单项 -->
        <div class="buy-item-inner-item">
          <div class="nogoods" v-if="this.digital.length == 0">
            <div>暂无该类商品发布，点击去发布闲置商品吧</div>
            <nuxt-link to="/release">
              <img src="../assets/img/entrance.png" alt="">
            </nuxt-link>
          </div>
          <ul v-else>
            <li v-for="(item, index) in digital" :key="index">
              <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
                <!-- <nuxt-link :to =`/goodsDetails/${index}`> -->
                <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">
              </nuxt-link>
              <p class="item-header">{{item.gname}}</p>
              <span class="item-description">{{item.desc}}</span>
              <span class="item-price">￥{{item.sale_price}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goods: '',
        phoneList: '',
        large_appliances: '',
        decoration: '',
        living_appliances: '',
        digital: '',
        book: '',
        banner_list: [{
            url: require('../assets//img/slide_1.png')
          },
          {
            url: require('../assets//img/slide_2.png')
          },
          {
            url: require('../assets//img/slide_3.png')
          }
        ]
      }
    },
    created() {
      this.getAllGoods()
    },
    mounted () {
      // this.$store.dispatch
    },
    methods: {
      filterData(kind) {
        return this.goods.filter((item) => {
          return item.type[0].kind == kind
        });
      },
      getAllGoods() {

        this.$axios.post('/goods/getGoods').then(res => {
          this.goods = res.data.data

          this.phoneList = this.filterData('phone').slice(this.phoneList.length - 4, this.phoneList.length - 1);
          this.large_appliances = this.filterData('large_appliances').slice(0, 3);
          console.log(this.filterData('decoration').slice(0, 3).length);
          this.decoration = this.filterData('decoration').slice(0, 3);;
          this.living_appliances = this.filterData('living_appliances').slice(0, 3);;
          this.digital = this.filterData('digital').slice(0, 3);;
          this.book = this.filterData('book').slice(0, 3);
          // console.log(decoration);

        })
      }
    }

  }

</script>

<style lang="scss" scoped>
  .content {
    width: 1190px;
    height: 432px;
    position: relative;
    box-sizing: border-box;

    .content-left {
      box-sizing: border-box;
      width: 990px;
      height: 432px;
      position: relative;
      float: left;

      .category {
        box-sizing: border-box;
        width: 290px;
        height: 432px;
        position: absolute;
        background: rgba(46, 46, 46, 0.88);
        z-index: 999;

        .see-more {
          display: inline-block;
          width: 290px;
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-size: 14px;
          color: #ccc;

          &:hover {
            color: #fff;
          }
        }

        .category-ul {
          li {
            width: 290px;
            height: 48px;
            line-height: 48px;
            box-sizing: border-box;
            padding: 0 24px;
            float: left;
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .popular {
              display: inline-block;
              width: 64px;
              font-size: 16px;
              color: #fff;

            }

            .category-details {
              text-align: right;

              a {
                display: inline-block;
                color: #ccc;
                margin-right: 24px;
                font-size: 12px;

                &:hover {
                  color: #fff;
                  font-weight: 700;
                }
              }

              a:last-child {
                margin-right: 0;
              }
            }

            &:hover {
              background: rgba(77, 77, 77, 1);
            }
          }
        }
      }

      .slide {
        box-sizing: border-box;
        width: 990px;
        height: 432px;
        position: absolute;

        /deep/ .el-carousel__arrow--left {
          margin-left: 300px;
        }

        /deep/ .el-carousel__indicators {
          margin-left: 440px;
          margin-bottom: 10px;
          width: 100px;
        }

        /deep/ .is-active .el-carousel__button {
          border: 2px solid rgba(0, 0, 0, .2);
          background: hsla(0, 0%, 100%, .3);
        }

        /deep/ .el-carousel__button {
          width: 10px;
          height: 10px;
          background: rgba(0, 0, 0, .3);
          border-radius: 50%;
          margin-right: 5px;
          border: 2px solid hsla(0, 0%, 100%, .2);
        }

        img {
          width: 990px;
          height: 432px;
        }
      }
    }

    .content-right {
      box-sizing: border-box;
      width: 190px;
      height: 432px;
      float: right;

      .content-right-top {
        box-sizing: border-box;
        width: 190px;
        height: 250px;

        a {
          display: inline-block;
          width: 190px;
          height: 250px;

          img {
            display: inline-block;
            width: 190px;
            height: 250px;
          }
        }
      }

      .content-right-bottom {
        box-sizing: border-box;
        width: 190px;
        height: 172px;
        margin-top: 10px;

        a {
          display: inline-block;
          width: 190px;
          height: 172px;

          img {
            display: inline-block;
            width: 190px;
            height: 172px;
          }
        }
      }

    }
  }

  .sale {
    width: 1190px;
    height: 254px;
    margin-top: 30px;

    .title-sale {
      width: 100%;
      height: 64px;
      line-height: 64px;
      text-align: center;

      img {
        width: 196px;
        height: 61px;
      }
    }

    .content-sale {
      width: 1190px;
      height: 180px;
      margin-top: 10px;

      ul {

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        li {
          width: 290px;
          height: 180px;
          list-style: none;

          a {
            display: inline-block;
            width: 290px;
            height: 180px;

            img {
              display: inline-block;
              width: 290px;
              height: 180px;
            }
          }
        }
      }
    }

  }

  .buy {
    width: 1190px;
    height: 1232px;
    margin-top: 30px;

    .title-buy {
      width: 100%;
      height: 64px;
      line-height: 64px;
      text-align: center;
      margin-bottom: 10px;

      img {
        width: 196px;
        height: 61px;
      }
    }

    .buy-item {
      width: 590px;
      height: 366px;
      padding: 38px 10px 20px 30px;
      position: relative;
      box-sizing: border-box;
      background: #fff;
      float: left;
      margin-bottom: 20px;

      &:nth-child(2n+1) {
        margin-left: 10px;
      }

      .buy-item-header {
        position: relative;
        margin-bottom: 17px;

        h4 {
          height: 20px;
          line-height: 20px;
          border-left: 8px solid red;
          font-size: 20px;
          padding-left: 10px;
        }
      }

      .buy-item-inner-item {
        width: 540px;
        height: 272px;

        .nogoods {
          // padding: 20px;
          // background-color: #ccc;
          color: #333;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          div{
            margin-bottom: 10px;
          }
          img{
            width: 190px;
            height: 250px;
          }
        }

        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          li {
            width: 170px;
            height: 272px;
            list-style: none;

            img {
              width: 170px;
              height: 170px;
            }

            .item-header {
              height: 42px;
              line-height: 20px;
              font-size: 14px;
              padding: 0 10px;
              margin-bottom: 2px;
              letter-spacing: 1px;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }

            .item-description {
              display: inline-block;
              width: 152px;
              height: 16px;
              font-size: 12px;
              padding: 0 10px;
              color: #999;
              margin-bottom: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .item-price {
              font-family: jdzh-r;
              font-size: 18px;
              padding: 0 10px;
              color: #ff3434;
            }
          }
        }
      }
    }

  }

</style>
