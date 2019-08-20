const path = require('path');
const url = require('url');
const fs = require('fs');
const webpackConfig = require('../../webpack.dev.conf.js');
const mongoose = require('mongoose');
const { MusicSchema } = require('../db/mongoose/index');
// const { musicians: mock } = require('../mock/mock');

const register = async function(ctx) {
    try {
        const musicSchema = mongoose.model('MusicSchema', MusicSchema);
        // mock.forEach((item) => {
        //     new musicSchema(item).save();
        // });
        const query = url.parse(ctx.request.url).query;
        let musicians;
        switch(query.split('=')[1]) {
            case 'all':
                musicians = await musicSchema.find();
                break;
            case 'Male':
                musicians = await musicSchema.find({sex: 'Male'});
                break;
            case 'Female':
                musicians = await musicSchema.find({sex: 'Female'});
                break;
            case 'Group':
                musicians = await musicSchema.find({sex: 'Group'});
                break;
            default:
                break;
        }
        // const songPath = path.join(__dirname, '../../../', 'songs/Beyond24/光辉岁月.mp3');
        // const song = fs.readFileSync(songPath);
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
