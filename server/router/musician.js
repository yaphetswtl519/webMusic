const path = require('path');
const webpackConfig = require('../../webpack.dev.conf.js');
const mongoose = require('mongoose');
const { MusicSchema } = require('../db/mongoose/index');
// const { musicians } = require('../mock/mock');

const register = async function(ctx) {
    try {
        const musicSchema = mongoose.model('MusicSchema', MusicSchema);
        // musicians.forEach((item) => {
        //     new musicSchema(item).save();
        // });
        const musicians = await musicSchema.find();
        ctx.body = {
            code: 200,
            musicians
        };
    } catch (e) {
        
    }
};
module.exports.register = function(router, app) {
    router.get('/getAllMusician', register);
};
