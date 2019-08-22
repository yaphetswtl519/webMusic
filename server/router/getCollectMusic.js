const url = require('url');
const mongoose = require('mongoose');
const { UserSchema, MusicSchema } = require('../db/mongoose/index');

const register = async function(ctx) {
    try {
        const User = mongoose.model('User', UserSchema);
        const musicSchema = mongoose.model('MusicSchema', MusicSchema);
        const query = url.parse(ctx.request.url).query.split('&');
        const username = query[0].split('=')[1];
        const isCollect = +query[1].split('=')[1] === 2;

        
        console.log(query, username, isCollect)
        let collectList = [];
        
        const user = await User.findOne({user_name: username});
        if (isCollect) {
            const musicians = await musicSchema.find({})
            collectList = user.songList.map(name => {
                const musician = musicians.find(_ => {
                    return _.songs.find(_ => _.name === name);
                });
                return {
                    name,
                    musician: musician.name,
                    img: musician.img
                }
            })
        }
        ctx.body = {
            code: 200,
            songList: user.songList,
            collectList
        };
    } catch (e) {
        console.log(e);
    }
};
module.exports.register = function(router, app) {
    router.get('/getCollectMusic', register);
};
