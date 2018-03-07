angular.module('angularModule').component("home", {
    templateUrl: "./components/pages/home/home.html",
    controller: function ($scope, $state, RejisterService) {
        var self = this;

        this.$onInit = function () {
        }

    }
})