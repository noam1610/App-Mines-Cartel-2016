'use strict';
var controllername = 'sponsor';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$ionicHistory'];

    function controller($ionicHistory) {
        var vm = this;
        vm.controllername = fullname;

       vm.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
