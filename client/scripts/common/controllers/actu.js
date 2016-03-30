'use strict';
var controllername = 'actu';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.data'];

    function controller(data) {
        var vm = this;
        vm.controllername = fullname;

        // console.log(data.Actu().then(function(reponse) {
        //     console.log(reponse);
        // }));

        data.Actu()
            .then(function(actualite) {
                vm.actualite = actualite;
                console.log(vm.actualite);
            });

        
        
        

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
