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
            'title': 'news',
            'array': ['acceuil', 'actu', 'calendar']
        }, {
            'title': 'RESULTAT',
            'array': ['en continu', 'par sport', 'par délégation', 'classement']
        }, {
            'title': 'Communiquer',
            'array': ['Sponsor', 'contact']
        }];

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
