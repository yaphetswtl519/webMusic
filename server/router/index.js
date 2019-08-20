const Router = require('koa-router');
const home = require('./home');
const login = require('./login');
const register = require('./register');
const musician = require('./musician');
const getMusician = require('./getMusician');
const getMusic = require('./getMusic');
const router = new Router();

home.register(router);
login.register(router);
register.register(router);
musician.register(router);
getMusician.register(router);
getMusic.register(router);

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};
