
const db = require('../utils/database');
function getData() {
    return db.collections.find((value) => value.name === 'userinfo');
}
module.exports = {
    /**
     * 登录操作
     * @param  {obejct} ctx 上下文对象
     */
    async signIn(ctx) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
         ctx.body = result
    },

    /**
     * 注册操作
     * @param   {obejct} ctx 上下文对象
     */
    async signUp(ctx) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null
        }
        let userinfo=getData();
        try{
            userinfo.insert(formData);
            console.log('db',db)
            db.saveDatabase(function(){console.log('db.save的回调')});
        }catch(e){
            console.log(e)
        }
        
        ctx.body = result
    }
}