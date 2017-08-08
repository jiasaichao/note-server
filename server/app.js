const Koa = require('koa')
const config = require('../config')
const loggerAsync = require('./middleware/logger-async')
const ip = require('ip').address();
const app = new Koa()
app.use(loggerAsync())
app.use(async (ctx, next) => {
    await next();
    ctx.body = 'hello koa2'
})
app.use(async (ctx, next) => {
    await next();
    ctx.body = 'hello koa3'
})

app.listen(config.port)
console.log('[demo] start-quick is starting at port '+config.port)
console.log('http://'+ip+':'+config.port)