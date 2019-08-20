const path = require('path');
const url = require('url');
const fs = require('fs');
const webpackConfig = require('../../webpack.dev.conf.js');
const mongoose = require('mongoose');
const { MusicSchema } = require('../db/mongoose/index');
const clondAddressPrefix = 'http://pv1ykrmt7.bkt.clouddn.com/';

const register = async function(ctx) {
    try {
        const musicSchema = mongoose.model('MusicSchema', MusicSchema);
        const query = url.parse(ctx.request.url).query;
        const musician = await musicSchema.find({name: query.split('=')[1]});

        console.log(musician);
        // const songPath = path.join(__dirname, '../../../', 'songs/Beyond24/光辉岁月.mp3');
        // const song = fs.readFileSync(songPath);
        ctx.body = {
            code: 200,
            // song: 'http://pv1ykrmt7.bkt.clouddn.com/Apologize.mp3'
        };
    } catch (e) {
        
    }
};
module.exports.register = function(router, app) {
    router.get('/getMusic', register);
};
