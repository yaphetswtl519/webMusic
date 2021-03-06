const koa = require('koa');
const koaWebpack = require('koa-webpack');
const bodyParser = require('koa-bodyparser');
const koaJson = require('koa-json');
const logger = require('koa-logger');
const boot = require('./boot');
const config = require('../webpack.dev.conf');
const koaRouter = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db');
const db = mongoose.connection;
db.on('error', (e) => {
    console.log(e);
});
db.once('open', () => {
    console.log('connect success');
});

const app = new koa();
boot.init(app);
boot.start();

let middleware = null;
koaWebpack({
    config
}).then((_middleware) => {
    middleware = _middleware;
    app.use(middleware);
}, (err) => {
    console.log(err)
});
app.use(async (ctx, next) => {
    ctx.webpackKoaMiddleware = middleware;
    await next();
});

// app.use(serve(path.join(__dirname, '../public')));
// auth(app);
// exception(app);
// inject(app);
app.use(logger());
app.use(bodyParser());
app.use(koaJson());
koaRouter(app);