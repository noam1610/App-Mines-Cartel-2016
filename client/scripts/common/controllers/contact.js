'use strict';
var controllername = 'contact';

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
            'Name': 'Hotline',
            'numero1': '06 48 07 98 26',
            'numero2': '06 40 45 55 18',
            'horaires': '7h30 à 21h30',
            'mail': 'contact@cartel2016.com'
        }];

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
