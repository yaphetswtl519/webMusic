const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: String,
    password: String,
    isVip: Boolean,
    songList: Array
});

const MusicSchema = new Schema({
    name: String,
    sex: String,
    biography: String,
    img: String,
    songs: [Schema.Types.Mixed]
});

module.exports = {
    UserSchema,
    MusicSchema
}