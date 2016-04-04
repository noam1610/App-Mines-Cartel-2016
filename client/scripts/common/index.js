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
    require('./services')(app);
    // inject:folders end
    app.namespace = app.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider, $httpProvider) {

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $urlRouterProvider.otherwise('/menu/home');

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
            })
            .state('menu.actu', {
                url: '/actu',
                views: {
                    'menuContent': {
                        template: require('./views/actu.html'),
                        controller: fullname + '.actu as vm'
                    }
                }
            })
            .state('menu.actuDetail', {
                url: '/actuDetail/:id',
                views: {
                    'menuContent': {
                        template: require('./views/actuDetail.html'),
                        controller: fullname + '.actu as vm'
                    }
                }
            })
            .state('menu.calendar', {
                url: '/calendar',
                views: {
                    'menuContent': {
                        template: require('./views/calendar.html'),
                        controller: fullname + '.calendar as vm'
                    }
                }
            })
            .state('menu.rescontinu', {
                url: '/rescontinu',
                views: {
                    'menuContent': {
                        template: require('./views/rescontinu.html'),
                        controller: fullname + '.rescontinu as vm'
                    }
                }
            })
            .state('menu.resdelegation', {
                url: '/resdelegation',
                views: {
                    'menuContent': {
                        template: require('./views/resdelegation.html'),
                        controller: fullname + '.resdelegation as vm'
                    }
                }
            })
            .state('menu.sport', {
                url: '/sport',
                views: {
                    'menuContent': {
                        template: require('./views/sport.html'),
                        controller: fullname + '.sport as vm'
                    }
                }
            })
            .state('menu.sportDetail', {
                url: '/sportDetail/:id',
                views: {
                    'menuContent': {
                        template: require('./views/sportDetail.html'),
                        controller: fullname + '.sport as vm'
                    }
                }
            })
            .state('menu.classement', {
                url: '/classement',
                views: {
                    'menuContent': {
                        template: require('./views/classement.html'),
                        controller: fullname + '.classement as vm'
                    }
                }
            })
            .state('menu.sponsor', {
                url: '/sponsor',
                views: {
                    'menuContent': {
                        template: require('./views/sponsor.html'),
                        controller: fullname + '.sponsor as vm'
                    }
                }
            })
            .state('menu.contact', {
                url: '/contact',
                views: {
                    'menuContent': {
                        template: require('./views/contact.html'),
                        controller: fullname + '.contact as vm'
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
