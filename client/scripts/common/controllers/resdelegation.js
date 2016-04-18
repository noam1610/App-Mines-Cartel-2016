'use strict';
var controllername = 'resdelegation';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$ionicHistory', '$stateParams', app.name + '.data'];

    function controller($ionicHistory, $stateParams, data) {
        var vm = this;
        vm.controllername = fullname;

        vm.delegation1 = $stateParams.id;

        if ($stateParams.id) {
            data.getDelegation($stateParams.id)
                .then(function(resultat) {
                    vm.resultat = resultat;
                    console.log('DATA resultat', resultat);
                }, function(err) {
                    console.log(err)
                });
        };

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };

        vm.delegation = ['Paris', 'Nancy', 'Saint-Etienne', 'Albi', 'Douai', 'Ales', 'Vigo', 'Oviedo', 'Bochum', 'Emines'];

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
