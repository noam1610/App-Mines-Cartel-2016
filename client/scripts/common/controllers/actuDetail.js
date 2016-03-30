'use strict';
var controllername = 'actuDetail';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$stateParams', app.name + '.data'];

    function controller($stateParams, data) {
        var vm = this;
        vm.controllername = fullname;

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
