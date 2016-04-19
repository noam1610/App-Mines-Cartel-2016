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

        var getClassement = function(sport) {
            return $http.get('http://cartel2016.com/api/get/classement.php?sport=' + sport)
                .then(function(data) {
                    console.log('classement', data);
                    return data.data;
                });
        };

        var getDelegation = function(delegation) {

            return $http.get('http://cartel2016.com/api/get/resultats.php?delegation=' + delegation)
                .then(function(data1) {
                    return (data1.data);
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
            getDelegation: getDelegation,
            getClassement: getClassement

        };
    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
