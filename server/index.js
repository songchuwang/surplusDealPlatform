
//const Koa = require('koa')
//const consola = require('consola')
import Koa from "koa";
import consola from "consola";
const { Nuxt, Builder } = require('nuxt')

import mongoose from "mongoose"
// 处理跟post相关的请求
import bodyParser from "koa-bodyparser"
// 本项目未直接操作cookie，使用这个包可以通过操作session完成
import session from "koa-generic-session"
import Redis from "koa-redis"
// 解决服务端向客户端发response美化的效果，能让输出的json变得美观
import json from "koa-json"
import dbConfig from "./dbs/config"
import passport from "./interface/utils/passport"
import users from "./interface/users"
import geo from "./interface/geo"
import search from "./interface/search"

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.keys = ["mt", "keyskeys"]
app.proxy = true
app.use(session({
  key: "mt",
  prefix: "mt:uid",
  store: new Redis()
}))
// post处理
app.use(bodyParser({
  extendTypes: ["json", "form", "text"]
}))
app.use(json())
// 连接数据库
mongoose.connect(dbConfig.dbs, {
  useNewUrlParser:true
})
// passport初始化
app.use(passport.initialize())
app.use(passport.session())

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())
  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
