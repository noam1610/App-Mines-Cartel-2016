'use strict';
var controllername = 'home';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$window','$ionicHistory'];

    function controller($window, $ionicHistory) {
        var vm = this;
        vm.controllername = fullname;

        vm.width = $window.innerWidth;
        vm.height = $window.innerHeight;

         vm.myGoBack = function() {
            $ionicHistory.goBack();
        };
      
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
