import passport from "koa-passport"
import LocalStrategy from "passport-local"
import UserModel from "../../dbs/models/users"

passport.use(new LocalStrategy(async function(username,password,done){
  let where = {
    username
  };
  let result = await UserModel.findOne(where)
  if(result != null){
    if(result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, "密码错误")
    }
  } else {
    return done(null,false,"用户不存在")
  }
}))

// 用户每次进来自动通过session进行验证
// 序列化，将JSON对象转化为JSON字符串
passport.serializeUser(function(user, done){
  done(null, user)
})
// 反序列化，将JSON字符串转化为JSON对象 
passport.deserializeUser(function(user, done){
  return done(null, user)
})

export default passport;
