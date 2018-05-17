// Declare app level module which depends on filters, and services
angular.module('frontend', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/front.html',
                controller: 'frontendController',
                css: 'css/front.css',
            })


        // .otherwise({
        //     templateUrl: 'views/error.html',
        //     css: 'css/error.css'
        // });
        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .run(function() {

    });