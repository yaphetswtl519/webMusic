const Router = require('koa-router');
const home = require('./home');
const login = require('./login');
const register = require('./register');
const musician = require('./musician');
const getMusician = require('./getMusician');
const collectMusic = require('./collectMusic');
const getCollectMusic = require('./getCollectMusic');
const buyvip = require('./buyvip');
const router = new Router();

home.register(router);
login.register(router);
register.register(router);
musician.register(router);
getMusician.register(router);
collectMusic.register(router);
getCollectMusic.register(router);
buyvip.register(router);

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};
