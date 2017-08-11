/**
 * restful api 子路由
 */

const koarouter = require('koa-router');
const userInfoController = require('../controllers/userinfo');
const router=new koarouter();
const routers = router
  .get('/user/userInfo', userInfoController.signIn)
  .post('/user/userInfo',userInfoController.signUp);

module.exports = routers