// add friend 
app.controller('newFriendController', ['$scope', 'friendFactory', '$location', function($s, ff, $l){
    console.log('new friend controller loaded');

    $s.createFriend = function()
    { console.log('New friend controller is running')
        ff.addFriend($s.friend, function(){
	        $s.friend = {};
	        $l.url('/show-friends');
        });
       
    }
}]);
