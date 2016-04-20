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
            'Name': 'Mines De Paris',
            'image': 'images/app/logoMines.png'
        }, {
            'Name': 'Alten',
            'image': 'images/app/alten.png'
        }, {
            'Name': ' Mines ParisTech Alumni',
            'image': 'images/app/alumni.png'
        }, {
            'Name': 'Mairie de Paris',
            'image': 'images/app/mairie.svg'
        }, {
            'Name': 'Mines ParisTech Fondation',
            'image': 'images/app/fondation.png'
        }];

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
