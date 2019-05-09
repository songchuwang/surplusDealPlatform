import Router from "koa-router";
import Redis from "koa-redis";
import User from "../dbs/models/users"
import Passport from "./utils/passport"
import Email from "../dbs/config"
import axios from "./utils/axios"
import Goods from '../dbs/models/goods'
import Orders from '../dbs/models/order'
import Delivery from '../dbs/models/delivery'
import Wait from '../dbs/models/wait'
import Complete from '../dbs/models/complete'

let router = new Router({
  prefix: "/goods"
})

let Store = new Redis().client
// 已发货转已完成
router.post('/toComplete', async (ctx) => {
  const {
    user_publisher,
    publisher,
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

  Wait.remove({id}, function (err, docs) {
    if (err) console.log(err);
    console.log('删除成功：' + docs);
  });

  let complete = await Complete.create({
    user_publisher,
    publisher,
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
  if (complete) {
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
router.post('/getComplete', async (ctx) => {
  let complete_list = await Complete.find({})

  if (complete_list) {
    ctx.body = {
      code: 0,
      msg: '查询成功',
      data: complete_list
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '查询失败'
    }
  }

})
router.post('/searchComplete', async (ctx) => {
  const {_id} = ctx.request.body
  let search = await Complete.find({_id})

  if (search.length) {
    ctx.body = {
      code: 0,
      msg: '查询成功',
      data: search
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '不存在数据'
    }
  }

})
// 待发货转已发货
router.post('/getWaitGoods', async (ctx) => {
  let order_list = await Wait.find({})

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
router.post('/addWait', async (ctx) => {
  const {
    user_publisher,
    publisher,
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

  Delivery.remove({id}, function (err, docs) {
    if (err) console.log(err);
    console.log('删除成功：' + docs);
  });

  let wait = await Wait.create({
    user_publisher,
    publisher,
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
  if (wait) {
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
// 待付款转待发货
router.post('/getAllDelivery', async (ctx) => {
  let order_list = await Delivery.find({})

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
router.post('/getDelivery', async (ctx) => {

  const {id} = ctx.request.body
  let order_list = await Delivery.find({id})

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

router.post('/addDelivery', async (ctx) => {
  const {
    user_publisher,
    publisher,
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

  Orders.remove({id}, function (err, docs) {
    if (err) console.log(err);
    console.log('删除成功：' + docs);
  });

  let delivery = await Delivery.create({
    user_publisher,
    publisher,
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
  if (delivery) {
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


// 到待付款

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
    user_publisher,
    publisher,
    _id,
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

  Goods.remove({_id}, function (err, docs) {
    if (err) console.log(err);
    console.log('删除成功：' + docs);
  });


  let order = await Orders.create({
    user_publisher,
    publisher,
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

router.post('/cancelOrder', async (ctx) => {
  const {
    user_publisher,
    publisher,
    _id,
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

  Orders.remove({_id}, function (err, docs) {
    if (err) console.log(err);
    console.log('删除成功：' + docs);
  });


  let order = await Goods.create({
    user_publisher,
    publisher,
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
      msg: '订单已取消'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '取消失败失败'
    }
  }

})


router.post('/release', async (ctx) => {
  global.console.log(ctx.request.body)
  const {
    user_publisher,
    publisher,
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
    user_publisher,
    publisher,
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

// 删除商品
router.post('/removeGoods', async (ctx) => {
  const {
    _id
  } = ctx.request.body;

  Goods.remove({_id}, function (err, docs) {
    if (err) console.log(err);
    console.log('删除成功：' + docs);
  });

  ctx.body = {
    code: 0,
    msg: '删除数据成功'
  }
  

})

export default router;

