<template>
  <div class="container">
    <div class="content">
      <h2>收货信息</h2>
      <div class="take-good-infors">
        <div class="item" v-for="(item,index) in addresses" :key="index">
          <div class="person">{{item.name}}
            <img src="../assets/img/selected.png" alt="">
          </div>
          <div class="ad-detail">
            <p style="padding-left:30px">{{item.address}}</p>
            <p>{{item.phone}}</p>
            <i>默认地址</i>
            <span class="setDefaultAdd" @click="setDefaultAdd(item,index)">设为默认地址</span>
          </div>
        </div>
        <div v-if="this.addresses.length != 1" class="Add" @click="retractAdd">收起地址</div>
        <div v-else class="Add" @click="moreAdd">更多地址</div>
      </div>
      <h2 style="margin-top:40px">商品信息</h2>
      <div class="goods-infor">
        <div class="goods-infor-img">
          <img :src="`data:image/jpg;base64,${this.goodsInfor.imgs[0].url}`" alt="">
        </div>
        <div>
          <h3 class="header">{{this.goodsInfor.gname}}</h3>
          <!-- <h3 class="header">{{this.obj.gname}}</h3> -->
          <div class="decription">{{this.goodsInfor.desc}}</div>
        </div>
      </div>
      <div class="order-info">
        <div class="order-info-price">
          <span>应付总金额：</span>
          <span>¥ {{this.goodsInfor.sale_price}}</span>
        </div>
        <div class="order-info-detail">
          <p style="margin-right:50px">寄送至：<span>广东深圳市南山区南山区软件产业基地软件大厦6楼</span></p>
          <p>收货人：<span style="margin-right:10px">宋楚望</span><span>153****1156</span></p>
        </div>
      </div>
      <div class="submit-order">
        <nuxt-link @click="addOrder" :to="{name:'personal',query:{buy:this.$route.query.buy}}">
          <a @click="addOrder">提交订单</a>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goods_infor: '',
        obj: {},
        goodsInfor: {
          imgs: [{
            url:''
          }]
        },
        addresses: [{
            name: '宋楚望',
            address: '广东深圳市宝安区西乡街道共乐下塘二巷2号',
            phone: '153****1156'
          },
          {
            name: '宋楚望',
            address: '广东深圳市宝安区西乡街道共乐下塘二巷2号908',
            phone: '153****1156'
          },
          {
            name: '宋楚望',
            address: '广东深圳市宝安区西乡街道共乐下塘二巷2号',
            phone: '153****1156'
          }
        ],
        add_storage: [],
        
      }
    },
    created () {
     
    },
    mounted() {
      this.$axios.post('/goods/getGoodInfor', {
        _id: this.$route.query.buy
      }).then(res => {
        this.goodsInfor = res.data.data
        // Object.assign({},this.goodsInfor, {
        //   imgs: res.data.data.imgs
        // })
        console.log(this.goodsInfor);
        console.log(this.goodsInfor.imgs[0]);
        
        
      })
      
    },
    methods: {
      addOrder() {
        let uid = this.$store.state.geo.userId
        let obj = Object.assign({},this.goodsInfor,{
          id: uid
        })
        console.log(obj)
        this.$axios.post('/goods/addorder', obj).then(res => {
          console.log(res.data)
        })
      },
     
      retractAdd() {
        // 深拷贝一份数据
        this.add_storage = JSON.parse(JSON.stringify(this.addresses))
        this.addresses.splice(1, this.addresses.length);
      },
      moreAdd() {
        this.addresses = this.add_storage;
      },
      setDefaultAdd(item, index) {
        // this.addresses.unshift(this.addresses.splice(index,1)[0]);
        console.log(this.addresses);
        let addItems = document.querySelectorAll('.item');
        for (let i = 0; i < addItems.length; i++) {
          addItems[i].classList.remove('is-selected');
        }
        addItems[index].classList.add('is-selected');

      }
    }
  }

</script>

<style lang="scss" scoped>
  .content {
    width: 1190px;
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 20px;
    overflow: hidden;

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
      margin-bottom: 5px;

      // display: none;
      &:hover {
        .setDefaultAdd {
          display: block;
          color: #158efe;

        }

        background: #f9f9f9;
      }

      .person {
        width: 136px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-right: 5px;
        box-sizing: border-box;

        img {
          display: none;
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

        &:hover {
          background: #f9f9f9;
        }

        i {
          display: inline-block;
          width: 72px;
          height: 24px;
          line-height: 24px;
          background: #d4d4d4;
          text-align: center;
          font-size: 12px;
          color: #fff;
          visibility: hidden;
          margin-left: 20px;
        }

        span {
          display: inline-block;
          margin: 0 15px;
          color: #158efe;
          cursor: pointer;
          padding-left: 200px;
          display: none;

        }
      }

    }

    .is-selected {
      display: block;
      width: 1130px;
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 5px;

      &:hover {
        background: #f9f9f9;
      }

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
          display: inline-block;
        }


      }

      .ad-detail {
        i {
          visibility: visible;
        }
      }

    }

    .Add {
      color: #158efe;
      padding: 10px 10px;
      cursor: pointer;
    }

    .goods-infor {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .goods-infor-img {
        margin-right: 20px;
        img{
          width: 100px;
          height: 100px;
        }
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 10px;
      }
    }

    .order-info {
      width: 1130px;
      height: 80px;
      background: #f3f3f3;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      box-sizing: border-box;
      padding-right: 10px;

      .order-info-detail {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }

    .submit-order {
      float: right;
      height: 56px;
      line-height: 56px;
      background: #fc5247;
      padding: 0 20px;
      font-size: 20px;
      color: #fff;
      margin-top: 20px;
      cursor: pointer;

    }


  }

</style>
