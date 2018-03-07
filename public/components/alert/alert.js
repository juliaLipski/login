angular.module('angularModule').component("alert", {
    templateUrl: "./components/alert/alert.html",
    controller: function ($scope, $state) {
        var self = this;

        this.close = function () {
            self.showmessalert = false;
        }
        this.$onInit = function () {
        }
    },
    bindings: {
        message: '=',
        showmessalert: '='
    }
})