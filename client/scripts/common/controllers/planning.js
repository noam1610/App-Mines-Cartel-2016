'use strict';
var controllername = 'planning';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$ionicHistory', app.name + '.data'];

    function controller($ionicHistory, data) {
        var vm = this;
        vm.controllername = fullname;

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };

        vm.getPlanning = function() {
            data.getPlanning(vm.sport, vm.delegation)
                .then(function(data) {
                    console.log(data);
                    vm.resultat = data;
                });
        };

        vm.delegations = ['Paris', 'Nancy', 'Saint-Etienne', 'albi', 'Douai', 'Ales', 'Vigo', 'Oviedo', 'Bochum', 'Emines'];

        vm.sports = ['rugby_h',
            'rugby_f',
            'natation_h',
            'natation_f',
            'petanque',
            'tennis_de_table',
            'volley_h',
            'volley_f',
            'cross_h',
            'cross_f',
            'handball',
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
