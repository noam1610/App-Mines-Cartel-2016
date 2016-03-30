'use strict';
var controllername = 'sport';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        vm.sports = ['rugby_h',
            'rugby_f',
            'natation_h',
            'natation_f',
            'petanque',
            'tennisdetable',
            'volley_h',
            'volley_f',
            'cross_h',
            'cross_f',
            'handball_h',
            'handball_f',
            'basket_h',
            'basket_f',
            'tennis',
            'badminton',
            'escalade_h',
            'escalade_f',
            'athle',
            'pompom'
        ];
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
