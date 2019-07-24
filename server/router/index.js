const Router = require('koa-router');
const home = require('./home');

const router = new Router();
home.register(router);
module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};
