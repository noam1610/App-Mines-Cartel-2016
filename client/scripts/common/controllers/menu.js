'use strict';
var controllername = 'menu';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$window'];

    function controller($window) {
        var vm = this;
        vm.controllername = fullname;

        vm.width = $window.innerWidth;
        vm.height = $window.innerHeight;

        vm.menu = [{
            'title': 'NEWS',
            'array': [{
                    'title': 'acceuil',
                    'page': 'home'
                }, {
                    'title': 'actualité',
                    'page': 'actu'
                }, {
                    'title': 'Calendrier',
                    'page': 'calendar'
                }, {
                    'title': 'Planning des match',
                    'page': 'planning'
                },

            ]
        }, {
            'title': 'RESULTAT',
            'array': [

                {
                    'title': 'par sport',
                    'page': 'sport'
                }, {
                    'title': 'Par Délégation',
                    'page': 'resdelegation'
                }

                , {
                    'title': 'classement',
                    'page': 'classement'
                }

            ]
        }, {
            'title': 'COMMUNIQUER',
            'array': [

                {
                    'title': 'Contact',
                    'page': 'contact'
                }, {
                    'title': 'Sponsor',
                    'page': 'sponsor'
                }

            ]
        }];

        // vm.menu = [{
        //     'title': 'news',
        //     'array': [{
        //         'title': 'acceuil',
        //         'page': 'home'
        //     }, {
        //         'title': 'actualité',
        //         'page': 'actu'
        //     }, {
        //         'title': 'Calendrier',
        //         'page': 'calendar'
        //     }]
        // }, {
        //     'title': 'RESULTAT',
        //     'array': ['en continu', 'par sport', 'par délégation', 'classement']
        // }, {
        //     'title': 'Communiquer',
        //     'array': ['Sponsor', 'contact']
        // }];

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
