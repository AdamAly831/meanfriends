//route page 
app.controller('showFriendsController', ['$scope', 'friendFactory', function($s, ff){
    $s.friends = [];
    getAllFriends();

    function getAllFriends(){
        ff.getAllFriends(function(f){
            $s.friends = f;
        });
    }

    $s.delete = function(friend){
        ff.delete(friend);
        getAllFriends();
    }
}]);
