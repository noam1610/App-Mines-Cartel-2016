'use strict';
var controllername = 'home';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$window'];

    function controller($window) {
        var vm = this;
        vm.controllername = fullname;

        vm.width = $window.innerWidth;
        vm.height = $window.innerHeight;
      
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
