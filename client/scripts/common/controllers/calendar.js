'use strict';
var controllername = 'calendar';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.data'];

    function controller(data) {
        var vm = this;
        vm.controllername = fullname;

        data.Event()
            .then(function(evenement) {
                vm.evenement = evenement;
                console.log(vm.evenement);
            });
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
