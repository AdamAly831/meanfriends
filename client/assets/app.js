var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/show-friends', {
            templateUrl: 'partials/allFriends.html',
            controller: 'showFriendsController'
        })
        .when('/new-friend', {
            templateUrl: 'partials/new.html',
            controller: 'newFriendController'
        })
        .when('/edit-friend/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editFriendController'
        })
         .when('/show-friend/:id', {
            templateUrl: 'partials/show.html',
            controller: 'showFriendIdController'
        })

        .otherwise({
            redirectTo:'/show-friends'
        })
})
