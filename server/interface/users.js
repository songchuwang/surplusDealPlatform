import Router from "koa-router";
import Redis from "koa-redis";
import nodeMailer from "nodemailer"
import User from "../dbs/models/users"
import Passport from "./utils/passport"
import Email from "../dbs/config"
import axios from "./utils/axios"
import Goods from '../dbs/models/goods'

let router = new Router({
  prefix: "/users"
})

let Store = new Redis().client


/**
 * -----注册接口-----
 */
router.post("/signup", async (ctx)=>{
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body;//post方式

  if(code) {
    const saveCode = await Store.hget(`nodemail:${username}`, "code");
    const saveExpire = await Store.hget(`nodemail:${username}`, "expire");
    if(code === saveCode) {
      if(new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: "验证吗已过期，请重新尝试"
        }
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "请填写正确的验证码"
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "请填写验证码"
    }
  }

  let user = await User.find({
    username
  })
  if(user.length) {
    ctx.body = {
      code: -1,
      msg: "用户名已被注册"
    }
    return
  }
  let nuser = await User.create({
    username,
    password,
    email
  })
  if(nuser) {
    let res = await axios.post('/users/signin', {
      username,
      password
    })
    if(res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: "注册成功",
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "error"
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    }
  }
})
/**
 * -----登录接口-----
 */
router.post('/signin', async (ctx, next)=>{
  return Passport.authenticate("local", function(err, user, info, status){
    if(err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if(user) {
        ctx.body = {
          code: 0,
          msg: "登录成功",
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})
/**
 * -----邮箱发送接口-----
 */
router.post("/verify", async(ctx, next)=>{
  let username = ctx.request.body.username;
  const saveExpire = await Store.hget(`nodemail:${username}`, "expire")
  if(saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: "验证请求过于频繁，1分钟内1次"
    }
    return false
  }
  // 定义发送对象
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  // 对外发送哪些信息以及接收方
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  // 邮件中显示哪些内容
  let mailOptions = {
    from: `认证邮件<${Email.smtp.user}>`,
    to: ko.email,
    subject: "《慕课网高仿美团网全栈实战》注册码",
    html: `您在《慕课网高仿美团网全栈实战》课程中注册，您的邀请码是${ko.code}`
  }
  await transporter.sendMail(mailOptions, (err, info)=>{
    if(err) {
      return console.log(err);
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: "验证码已经发送，可能会有延时，有效期1分钟"
  }
})
/**
 * 退出登录
 */
router.get('/exit', async (ctx, next)=>{
  await ctx.logout()
  if(!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})
/**
 * 获取用户信息
 */
router.get('/getUser', async (ctx)=>{
  if(ctx.isAuthenticated()) {
    const {username, email, _id} = ctx.session.passport.user
    ctx.body = {
      user: username,
      email,
      _id
    }
  } else {
    ctx.body = {
      user: "",
      email: ""
    }
  }
})

/** 
 * 获取商品发布人信息
 * 
*/
router.post('/getGoodsReleaser', async (ctx)=>{
  const {
    _id
  } = ctx.request.body

  let user = await User.find({_id})
  if(user){
    ctx.body = {
      code:0,
      msg:'查询成功',
      data:user
    }
  }else {
    ctx.body = {
      code:-1,
      msg:'查询失败'
    }
  }
})

export default router;
