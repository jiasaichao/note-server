const Koa = require('koa')
const path = require('path')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const config = require('../config')
const database = require('./utils/database')
const loggerAsync = require('./middleware/logger-async')
const ip = require('ip').address();
const app = new Koa();
const routers = require('./routers/index')

app.use(loggerAsync())
// 配置ctx.body解析中间件
app.use(bodyParser())
// 配置静态资源加载中间件,通过路径跟目录访问如，static中有
app.use(koaStatic(
    path.join(__dirname , './../static')
  ))
// #TODO
// 加载路由中间件
app.use(routers.routes()).use(routers.allowedMethods())
app.listen(config.port)
console.log('[demo] start-quick is starting at port '+config.port)
console.log('http://'+ip+':'+config.port)