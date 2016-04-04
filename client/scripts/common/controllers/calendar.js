'use strict';
var controllername = 'calendar';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.data', '$ionicHistory'];

    function controller(data, $ionicHistory) {
        var vm = this;
        vm.controllername = fullname;

        data.Event()
            .then(function(evenement) {
                vm.evenement = evenement;
                console.log(vm.evenement);
            });

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
