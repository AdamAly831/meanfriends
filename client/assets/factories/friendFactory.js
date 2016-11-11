app.factory('friendFactory', ['$http', function($http){
    var factory = {}
    var friends = [];

    factory.getAllFriends = function(callback){
        $http.get('/friends').then(function(data){
            friends = data.data;
            callback(friends);
        })
    }

    factory.addFriend = function(friend, callback){
        $http.post('/friends', friend).then(function(data){
            friends.push(data);
            callback(data)
        })
    }

    factory.getFriendById = function(id, callback){
        // console.log(id);
        $http.get(`/friends/${id}`).then(function(data){
            console.log(data);
            // data.data[0].birthday = new Date(data.data[0].birthday);
            callback(data.data);
        })
    }

    factory.updateFriend = function(friend){
        $http.put(`/friends/${friend._id}`, friend)
    }

    factory.delete = function(friend){
        $http.delete(`/friends/${friend._id}`);
    }

    return factory;
}]);






//
