import Router from "koa-router";
import Redis from "koa-redis";
import User from "../dbs/models/users"
import Passport from "./utils/passport"
import Email from "../dbs/config"
import axios from "./utils/axios"
import Goods from '../dbs/models/goods'
import Orders from '../dbs/models/order'

let router = new Router({
  prefix: "/goods"
})

let Store = new Redis().client
router.post('/getorder', async (ctx) => {
  const {
    id
  } = ctx.request.body;

  let order_list = await Orders.find({
    id: id
  })

  if (order_list) {
    ctx.body = {
      code: 0,
      msg: '查询成功',
      data: order_list
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '查询失败'
    }
  }

})

router.post('/addorder', async (ctx) => {
  const {
    id,
    gname,
    desc,
    imgs,
    address,
    sale_price,
    postage,
    original_price,
    type
  } = ctx.request.body;


  let order = await Orders.create({
    id,
    gname,
    desc,
    imgs,
    address,
    sale_price,
    postage,
    original_price,
    type
  })
  if (order) {
    ctx.body = {
      code: 0,
      msg: '添加成功'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '添加失败'
    }
  }

})


router.post('/release', async (ctx) => {
  global.console.log(ctx.request.body)
  const {
    gname,
    desc,
    imgs,
    address,
    sale_price,
    postage,
    original_price,
    type
  } = ctx.request.body;


  let ngood = await Goods.create({
    gname,
    desc,
    imgs,
    address,
    sale_price,
    postage,
    original_price,
    type
  })
  if (ngood) {
    ctx.body = {
      code: 0,
      msg: '发布成功'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '发布失败'
    }
  }

})

router.post('/getGoodInfor', async (ctx) => {
  const {
    _id
  } = ctx.request.body
  let goodInfor = await Goods.findOne({
    _id: _id
  })
  if(goodInfor){
    ctx.body = {
      code: 0,
      msg: '查询成功',
      data: goodInfor
    }
  }else {
    ctx.body = {
      code: -1,
      msg: '查询失败'
    }
  }
})

router.post('/getGoods', async (ctx) => {
  // const {gname} = ctx.request.body
  let goods = await Goods.find({}, (err, doc) => {
    if (err) {
      ctx.response.body = {
        code: -1,
        msg: '错误'
      }
    } else {
      ctx.response.body = {
        code: 0,
        data: doc
      }
    }
  })
  if (goods) {
    ctx.body = {
      code: 0,
      msg: 'success',
      data: goods
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '商品不存在'
    }
  }
})

export default router;


// function getBase64(file) {
//   var reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     console.log(reader.result);
//   };
//   reader.onerror = function (error) {
//     console.log('Error: ', error);
//   };
// }
// var file = document.querySelector('#files > input[type="file"]').files[0];
// getBase64(file); 
