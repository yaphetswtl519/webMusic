const Router = require('koa-router');
const home = require('./home');
const login = require('./login');
const register = require('./register');
const router = new Router();

home.register(router);
login.register(router);
register.register(router);

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};
