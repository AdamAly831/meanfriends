//editfriends info 
app.controller('showFriendIdController', ['$scope', 'friendFactory', '$routeParams', '$location', function($s, ff, $r, $l){
    console.log('show id  controller loaded');
  
    ff.getFriendById($r.id ,function(f){
        $s.friend = f;
        
    });
}]);
 