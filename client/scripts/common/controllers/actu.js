'use strict';
var controllername = 'actu';
var _ = require('lodash');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.data', '$stateParams', '$ionicHistory'];

    function controller(data, $stateParams, $ionicHistory) {
        var vm = this;
        vm.controllername = fullname;
        var idActu = 0;

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };


        data.Actu()
            .then(function(actualite) {
                console.log('DATA ACTU');
                vm.actualite = actualite;
                console.log(vm.actualite);

                if ($stateParams.id) {
                    idActu = $stateParams.id;
                    console.log(vm.actualite);
                    vm.actuEnDetail = _.compact(_.map(vm.actualite, function(actu) {
                        console.log('actu', actu);
                        console.log('idActu', actu.id);
                        if (actu.id === idActu) {
                            return actu;
                        }
                        return 0;
                    }))[0];
                    console.log('vm.actu...', vm.actuEnDetail);
                };

            });

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
