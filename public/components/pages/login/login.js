angular.module('angularModule').component("login", {
    templateUrl: "./components/pages/login/login.html",
    controller: function ($scope,  $window, $state,LoginService) {
        var self = this;
        function setAlertMess(mess) {
            self.showmessalert = true;
            self.message = mess;
            self.user = {};
        }

        this.Login = function () {
            LoginService.login(self.user).then(function (response) {
                console.log(response.data === "ok")
                if(response.data === "ok"){
                    $window.sessionStorage.setItem('user', angular.toJson(self.user));
                    $state.go('user');
                }else{
                    setAlertMess('Try again, not logged in')
                }
            }, function (error) {
            });
            console.log(self.user);
        }

        this.$onInit = function () {
           
        }

    }
})