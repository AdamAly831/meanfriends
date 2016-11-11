console.log("Controller loaded");

var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");

function FriendsController() {
    this.index = function(req, res) {
        Friend.find({}, function(err, friends){
            if(err){console.log(err);}
            return res.json(friends);
        })
    };
    this.create = function(req, res) {
        var friend = new Friend(req.body);
        friend.save();
        res.json(friend);
    };
    this.update = function(req, res) {
        Friend.update({_id: req.params.id}, req.body, function(err){
            if(err){console.log(err);}
            res.json();
        })
    };
    this.delete = function(req, res) {
        Friend.remove({_id: req.params.id}, function(err){
            if(err){console.log(err);}
            res.json();
        });
    };
    this.show = function(req, res) {
        Friend.findOne({_id: req.params.id}, function(err, friend){
            if(err){console.log(err);}
            res.json(friend);
        })
    };
}

module.exports = new FriendsController();


 





//
