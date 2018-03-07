var app = angular.module("angularModule", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    var authenticated = ['$q', 'AuthService', function ($q, AuthService) {
        var deferred = $q.defer();
        var isLoggedIn = AuthService.isLoggedIn()
        if (isLoggedIn === true) {
            deferred.resolve();
        } else {
            alert('Not logged in')
            deferred.reject('Not logged in');
        }
        return deferred.promise;
    }];
    $stateProvider
        .state('home', {
            url: '/home',
            component: "home",
        })
        .state('login', {
            url: '/login',
            component: "login",
        })
        .state('user', {
            url: '/user',
            component: "user",
            resolve: {
                authenticated: authenticated
            }
        });
    $urlRouterProvider.otherwise('/home');
})
app.run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (err, req) {
        $state.go('login');
    });
});