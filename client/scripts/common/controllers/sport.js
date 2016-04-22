'use strict';
var controllername = 'sport';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$ionicHistory', '$stateParams', app.name + '.data'];

    function controller($ionicHistory, $stateParams, data) {
        var vm = this;
        vm.controllername = fullname;

        console.log($stateParams.id);
        vm.sport = $stateParams.id;

        vm.vainqueur = function(resultat) {
            if (Number(resultat.score1) > Number(resultat.score2)) {
                return true;

            };
            return false;
        };

        if ($stateParams.id) {
            data.getSport($stateParams.id)
                .then(function(resultat) {
                    vm.resultat = resultat;
                    console.log('resultat', resultat);
                });
        };

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };

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
