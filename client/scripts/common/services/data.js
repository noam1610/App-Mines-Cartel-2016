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

        var getSport = function(sport) {
            return $http.get('http://cartel2016.com/api/get/resultats.php?sport=' + sport)
                .then(function(data) {
                    console.log('noam', data);
                    return data.data;
                });
        };

        var getResultat = function(sport) {
            return $http.get('http://cartel2016.com/api/get/resultats.php?sport=' + sport)
                .then(function(data) {
                    console.log('noam', data);
                    return data.data;
                });
        };

        var getDelegation = function(delegation) {

            return $http.get('http://cartel2016.com/api/get/resultats.php?delegation_equipe1=' + delegation)
                .then(function(data1) {
                    console.log('DATA1', data1.data);
                    return $http.get('http://cartel2016.com/api/get/resultats.php?delegation_equipe2=' + delegation)
                        .then(function(data2) {
                            console.log('DATA2', data2.data);
                            console.log((data1.data).concat(data2.data));
                            return (data1.data).concat(data2.data);
                        });
                });
        };

        var Actu = function() {

            var req2 = {
                method: 'GET',
                url: 'http://cartel2016.com/api/get/actualites.php',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            };

            return $http.get(req2.url)
                .then(function(data) {
                    console.log('noam', data.data);
                    return data.data;
                }, function(err) {
                    console.log('err', err);
                    return err;
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
            ActuDetail: ActuDetail,
            getSport: getSport,
            getDelegation: getDelegation

        };
    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
