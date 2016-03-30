'use strict';
var controllername = 'resdelegation';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        vm.delegation = ['Paris', 'Nancy', 'Etienne', 'Albi', 'Douai', 'Ales', 'Maroc'];

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
