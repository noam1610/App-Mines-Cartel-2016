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


        vm.delegations = ['paris', 'nantes', 'nancy', 'saint-etienne', 'albi', 'douai', 'ales', 'vigo', 'oviedo', 'bochum', 'emines'];


        vm.sports = ['rugby_h',
            'rugby_f',
            'relais_natation',
            'relais_athletisme',
            'petanque',
            'tennis_de_table',
            'volley_h',
            'volley_f',
            'foot_h',
            'foot_f',
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
            'pompom'
        ];
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
