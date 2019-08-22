const url = require('url');
const mongoose = require('mongoose');
const { UserSchema } = require('../db/mongoose/index');

const register = async function(ctx) {
    try {
        const User = mongoose.model('User', UserSchema);

        const username = url.parse(ctx.request.url).query.split('=')[1];
        
        await User.findOne({user_name: username}).update({
            isVip: true
        });
        
        ctx.body = {
            code: 200,
            isVip: true
        };
    } catch (e) {
        
    }
};
module.exports.register = function(router, app) {
    router.get('/buyvip', register);
};
