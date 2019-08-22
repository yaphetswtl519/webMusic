const url = require('url');
const mongoose = require('mongoose');
const { UserSchema } = require('../db/mongoose/index');

const register = async function(ctx) {
    try {
        const User = mongoose.model('User', UserSchema);

        const query = url.parse(ctx.request.url).query.split('&');
        const music = decodeURIComponent(query[0].split('=')[1]);
        const username = query[1].split('=')[1];
        let user = await User.findOne({user_name: username});
        if (!user.songList.includes(music)) {
            await user.update({
                '$push': {
                    songList: music
                }
            });
        } else {
            await user.update({
                '$pull': {
                    songList: music
                }
            })
        }
        user = await User.findOne({user_name: username});
        ctx.body = {
            code: 200,
            songList: user.songList
        };
    } catch (e) {
        
    }
};
module.exports.register = function(router, app) {
    router.get('/collectMusic', register);
};
