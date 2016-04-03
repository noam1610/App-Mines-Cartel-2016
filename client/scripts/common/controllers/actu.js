'use strict';
var controllername = 'actu';
var _ = require('lodash');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.data', '$stateParams'];

    function controller(data, $stateParams) {
        var vm = this;
        vm.controllername = fullname;
        var idActu = 0;

        // console.log(data.Actu().then(function(reponse) {
        //     console.log(reponse);
        // }));

        data.Actu()
            .then(function(actualite) {
                vm.actualite = actualite;
                console.log(vm.actualite);

                if ($stateParams.id) {
                    idActu = $stateParams.id;
                    vm.actuEnDetail = _.map(vm.actualite, function(actu) {
                        console.log('actu', actu);
                        if (actu.id === idActu) {
                            return actu;
                        }
                    });
                    console.log('vm.actu...', vm.actuEnDetail);
                };

            });

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
