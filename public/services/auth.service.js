var app = angular.module('angularModule')

app.factory('AuthService', ['$window', function ($window) {
    var factory = {};

    factory.isLoggedIn = function () {
        var isLoggedIn = angular.fromJson($window.sessionStorage.getItem("user"))
        var res;
        console.log(isLoggedIn)
        isLoggedIn !== null ? res = true : res = false;
        console.log(res)
        return res;
    };
    
    return factory;

}]);