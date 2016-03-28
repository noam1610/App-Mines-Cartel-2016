'use strict';
var angular = require('angular');
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('ionic');
require('ionic-angular');
require('ng-cordova');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova']);
    // inject:folders start
    require('./controllers')(app);
    // inject:folders end
    app.namespace = app.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/menu');

        $stateProvider
            .state('menu', {
                url: '/menu',
                abstract: true,
                template: require('./views/menu.html'),
                controller: fullname + '.menu as vm'
            })
            .state('menu.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        template: require('./views/home.html'),
                        controller: fullname + '.home as vm'
                    }
                }
            });
        // .state('menu.collection', {
        //     url: '/collection/:id',
        //     views: {
        //         'menuContent': {
        //             template: require('./views/collection.html'),
        //             controller: fullname + '.collection as vm'
        //         }
        //     }
        // })
        // .state('menu.product', {
        //     url: '/product/:id',
        //     views: {
        //         'menuContent': {
        //             template: require('./views/product.html'),
        //             controller: fullname + '.product as vm'
        //         }
        //     }
        // })
        // .state('menu.presentation', {
        //     url: '/pres',
        //     views: {
        //         'menuContent': {
        //             template: require('./views/presentation.html')
        //         }
        //     }

        // });
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};
