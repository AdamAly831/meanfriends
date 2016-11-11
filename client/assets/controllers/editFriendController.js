//editfriends info 
app.controller('editFriendController', ['$scope', 'friendFactory', '$routeParams', '$location', function($s, ff, $r, $l){
    console.log('edit controller loaded');
    $s.friend;

    ff.getFriendById($r.id ,function(f){
        $s.friend = f;
    });

    $s.updateFriend = function(){
        ff.updateFriend($s.friend);
        $l.url('/show-friends');
    }

}]);
