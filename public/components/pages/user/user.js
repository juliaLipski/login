angular.module('angularModule').component("user", {
    templateUrl: "./components/pages/user/user.html",
    controller: function ($scope, RejisterService, $state) {
        var self = this;
        function getUsers() {
            RejisterService.getUsers().then(function (response) {
                console.log(response.data)
                self.users = response.data;
            }, function (error) {
                self.status = 'Unable to load customer data: ' + error.message;
            });
        }
        this.$onInit = function () {
            getUsers()
        }
    }
})