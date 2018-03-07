var app = angular.module('angularModule')

app.factory('RejisterService', ['$http', function ($http) {
  var users = {};
  var url = "/api/users";
  users.getUsers = function () {
    return $http.get(url)
  };
  users.addUser = function (user) {
    return $http.post(url, user)
  };

  return users;
}]);