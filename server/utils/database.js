const Loki = require('lokijs');
const LokiFSA = require("lokijs/src/loki-fs-structured-adapter");
const db = new Loki('database_loki', {
    adapter: new LokiFSA(),
    // autoload: true,
    // autoloadCallback : function(){console.log('数据自动加载')},
    // autosave: true, 
    // autosaveInterval: 4000,
    
});
db.loadDatabase({
}, () => {
    console.log('loadDatabase回调',db)
    if (!db.collections.find((value) => value.name === 'userinfo')) {
        db.addCollection('userinfo');
        db.saveDatabase();
    }
})
module.exports = db;