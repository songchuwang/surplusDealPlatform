<template>
  <div class="container">
    <div class="content">
      <div class="content-category">
        <div class="category-title">
          <img src="../assets/img/all_kinds_logo.png" alt="">
        </div>
        <div class="category-list">
          <ul>
            <li @click="selectGoods(item)" v-for="(item, index) in goods_list" :key="index"><a
                href="#">{{item.label}}</a></li>
          </ul>
        </div>
      </div>

      <div class="filter-title">
        <div class="filter-title-top">
          {{this.select_goods}}
        </div>
        <div class="filter-title-bottom">
          <ul>
            <li><a href="#">综合</a></li>
            <li><a href="#">最新发布</a></li>
            <li class="topBottomIcon"><a @click="sortPrice" href="#">价格</a></li>
            <li>
              <el-checkbox fill="#ddd" v-model="checked">包邮</el-checkbox>
            </li>
          </ul>
        </div>
      </div>

      <div class="goods">
        <div class="item" v-for="(item, index) in this.kind_goods" :key="index">
          <nuxt-link :to="{name:'goodsDetails',query:{search:item._id}}">
            <div class="goods-title">
              <div class="goods-title-img">
                <img src="http://placehold.it/30x30" alt="">
                <h5>songchuwang</h5>
              </div>
              <div class="goods-title-time">32分钟前来过</div>
            </div>
            <div class="goods-img">

              <img :src="`data:image/jpg;base64,${item.imgs[0].url}`" alt="">

            </div>
            <div class="goods-text">
              <p>{{item.gname}}</p>
              <p>{{item.desc}}</p>
            </div>
            <div class="goods-price">
              <div class="reality-price">
                <i>￥</i>
                <span>{{item.sale_price}}</span>
              </div>
              <div class="original-price">
                <i>￥</i>
                <span>{{item.original_price}}</span>
              </div>
            </div>
            <div class="goods-site">
              <img src="../assets/img/location.png" alt="">
              <div>{{item.address}}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goods_list: [{
          value: 'phone',
          label: '手机',
          kind: 'phone'
        }, {
          value: 'computer',
          label: '笔记本电脑',
          kind: 'digital'
        }, {
          value: 'flat',
          label: '平板',
          kind: 'digital'
        }, {
          value: 'desktop_computer',
          label: '台式机',
          kind: 'digital'
        }, {
          value: 'monitor',
          label: '显示器',
          kind: 'digital'
        }, {
          value: 'camera',
          label: '单反相机',
          kind: 'digital'
        }, {
          value: 'watch',
          label: '手表',
          kind: 'decoration'
        }, {
          value: 'bags',
          label: '箱包',
          kind: 'decoration'
        }, {
          value: 'refrigerator',
          label: '冰箱',
          kind: 'large_appliances'
        }, {
          value: 'machine',
          label: '洗衣机',
          kind: 'large_appliances'
        }, {
          value: 'teaching',
          label: '教材',
          kind: 'book'
        }, {
          value: 'self-Improvement',
          label: '励志',
          kind: 'book'
        }, {
          value: 'cosmetics',
          label: '化妆品',
          kind: 'decoration'
        }, {
          value: 'menswear',
          label: '男装',
          kind: 'decoration'
        }, {
          value: 'Womenwear',
          label: '女装',
          kind: 'decoration'
        }, {
          value: 'toys',
          label: '玩具',
          kind: 'decoration'
        }, {
          value: 'kitchen',
          label: '厨具',
          kind: 'living_appliances'
        }, {
          value: 'liquor',
          label: '酒类',
          kind: 'living_appliances'
        }],
        select_goods: '全部商品',
        select_goods_list: '',
        checked: false,
        kind_goods: '',
      }
    },
    mounted() {
      this.$axios.post('/goods/getGoods').then(res => {
        this.select_goods_list = res.data.data;
        this.kind_goods = this.select_goods_list
      })
    },
    methods: {
      sortPrice() {

      },
      selectGoods(item) {
        this.select_goods = item.label
        this.showKindGoods(item.value);
      },
      showKindGoods(value) {
        this.kind_goods = this.select_goods_list.filter((item) => {
          return item.type[0].value == value
        })
      },
    }
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
            overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              i {
                font-style: normal;
                font-size: 12px;
                color: #ff3434;
                margin-right: -5px;
              }

              span {
                width: 100px;
                font-size: 20px;
                color: #ff3434;
                margin: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }

            .original-price {
              margin: 0;
              padding: 0;
              text-decoration: line-through;
              color: #333;
              margin-left: 20px;
              height: 23px;
              line-height: 23px;
              margin-top: 3px;
              overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

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
