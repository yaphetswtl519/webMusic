const path = require('path');
const webpackConfig = require('../../webpack.dev.conf.js');
const mongoose = require('mongoose');
const { UserSchema } = require('../db/mongoose/index');

const register = async function(ctx) {
    try {
        const {username, password} = ctx.request.body;
        // const data = JSON.parse(ctx.request.body);
        const User = mongoose.model('User', UserSchema);
        const res = await new User({
            user_name: username,
            password,
            isVip: false
        }).save();
        ctx.body = {
            code: 200,
            msg: '注册成功'
        }
    } catch (e) {
        console.error(e);
        ctx.body = {
            code: 400,
            msg: '注册失败'
        };
    }
};
module.exports.register = function(router, app) {
    router.post('/register', register);
};
