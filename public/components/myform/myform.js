angular.module('angularModule').component("myform", {
    templateUrl: "./components/myform/myform.html",
    controller: function ($scope, $state, RejisterService) {
        var self = this;

        
        function setAlertMess(mess) {
            self.showmessalert = true;
            self.message = mess;
            self.user = {};
        }

        function saveUser(user) {
            RejisterService.addUser(user).then(function (response) {
                console.log(response)
                var mess;
                response.data !== "" ? mess = "user is registered" : mess = "error"
                setAlertMess(mess)
                self.user = {};
            }, function (error) {
                setAlertMess("error!!!user  exist in db")
                self.user = {};
                self.status = 'Unable to load customer data: ' + error.message;
            });
        }


        this.submitForm = function (usForm) {
            if (usForm === true) {
                saveUser(self.user)
            } else {
                setAlertMess("please, check your data")
            }
        }

        this.$onInit = function () {
        }

    }
})