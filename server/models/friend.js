console.log("Model Loaded");

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String},
    birthday: {type:Date}

}, {timestamps: true})

mongoose.model('Friend', FriendSchema);
var Friend = mongoose.model('Friend');
