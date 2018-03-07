var app = angular.module('angularModule')

app.factory('LoginService', ['$http', function ($http) {
  var user = {};

  user.login = function (user) {
    return $http.post("/api/login", user)
  };
  
  return user;
}]);