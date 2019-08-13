const mongoose = require('mongoose');
const { UserSchema } = require('../db/mongoose/index');

const login = async function(ctx) {
    try {
        const {username, password} = ctx.request.body;
        const User = mongoose.model('User', UserSchema);
        const res = await User.find({
            user_name: username
        });
        console.log(res, password)
        if (res[0].password === password) {
            ctx.response.body = {
                code: 200,
                msg: '登陆成功',
                isVip: res[0].isVip
            }
        } else {
            ctx.response.body = {
                code: 400,
                msg: '登录失败'
            };
        }
    } catch (e) {
        console.error(e);
        ctx.response.body = {
            code: 400,
            msg: '登录失败'
        };
    }
};
module.exports.register = function(router, app) {
    router.post('/login', login);
};
