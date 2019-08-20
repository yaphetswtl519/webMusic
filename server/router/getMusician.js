const path = require('path');
const url = require('url');
const webpackConfig = require('../../webpack.dev.conf.js');
const mongoose = require('mongoose');
const { MusicSchema } = require('../db/mongoose/index');

const register = async function(ctx) {
    try {
        const musicSchema = mongoose.model('MusicSchema', MusicSchema);
        // musicians.forEach((item) => {
        //     new musicSchema(item).save();
        // });
        const query = url.parse(ctx.request.url).query.split('=')[1];
        const res = await musicSchema.find({ name: decodeURIComponent(query) })
        ctx.body = {
            code: 200,
            res: res[0]
        };
    } catch (e) {
        
    }
};
module.exports.register = function(router, app) {
    router.get('/getMusician', register);
};
