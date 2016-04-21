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

        vm.delegation = ['paris','nantes', 'nancy', 'saint-etienne', 'albi', 'douai', 'ales', 'vigo', 'oviedo', 'bochum', 'emines'];

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
