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
            method: 'JSONP',
            url: 'http://cartel2016.com/api/get/actualites.php/callback=JSON_CALLBACK',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        var Actu = function() {
            return $http.get('http://cartel2016.com/api/get/actualites.php')
                .then(function(data) {
                    console.log('noam', data);
                    return data.data;
                });
        };

        var ActuDetail = function(id) {
            return $http.get('http://cartel2016.com/api/get/actualites.php')
                .then(function(data) {
                    console.log('noam', data);
                    return data.data;
                });
        };

        var Event = function() {
            return $http.get('http://cartel2016.com/api/get/evenements.php')
                .then(function(data) {
                    console.log('noam', data);
                    return data.data;
                });
        };

        return {
            Actu: Actu,
            Event: Event,
            ActuDetail: ActuDetail
        };
    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
