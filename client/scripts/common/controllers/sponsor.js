'use strict';
var controllername = 'sponsor';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$ionicHistory', '$window'];

    function controller($ionicHistory, $window) {
        var vm = this;
        vm.controllername = fullname;

        vm.width = $window.innerWidth;
        vm.height = $window.innerHeight;

        vm.listDesContacts = [{
            'title': 'Mines De Paris',
            'logo': 'images/app/logoMines.png',
            'description': 'Bla kjdsf ldkf skdjf'
        }];

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
