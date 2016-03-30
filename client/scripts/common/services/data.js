'use strict';
var servicename = 'data';

module.exports = function(app) {

    var dependencies = ['$http'];

    function service($http) {

        // var req = {
        //     method: 'GET',
        //     url: 'http://cartel2016.com/api/get/actualites.php',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // };

        var req = {
            method: 'GET',
            url: ' http://cartel2016.com/api/get/planningmatch.php?delegation=paris',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
        http: //cartel2016.com/api/get/planningmatch.php?delegation=paris

            var Actu = function(token) {
                // var urlActu = 'http://cartel2016.com/api/get/actualites.php';

                return $http.jsonp(req.url, req)
                    .then(function(response) {
                        return response;
                    });

            };

        return {
            Actu: Actu
        };
    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
