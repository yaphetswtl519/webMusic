const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: String,
    password: String,
    isVip: Boolean,
});

module.exports = UserSchema