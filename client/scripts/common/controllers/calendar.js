'use strict';
var controllername = 'calendar';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.data', '$ionicHistory'];

    function controller(data, $ionicHistory) {
        var vm = this;
        vm.controllername = fullname;

        data.Event()
            .then(function(evenement) {
                vm.evenement = evenement;
                console.log(vm.evenement);
            });

        vm.myGoBack = function() {
            $ionicHistory.goBack();
        };

        vm.evenement = [{
            'titre': 'Accueil et déjeuner',
            'date': '21/04/2016',
            'heure': '10h - 12h30',
            'lieu': ''
        }, {
            'titre': "Transport vers la cérémonie d'ouverture",
            'date': "21/04/2016",
            'heure': "12h30 - 13h30",
            'lieu': ""
        }, {
            'titre': "Discours",
            'date': "21/04/2016",
            'heure': "14h - 14h30",
            'lieu': "Place du Panthéon"
        }, {
            'titre': "Challenge WattBike",
            'date': "21/04/2016",
            'heure': "14h30 - 15h",
            'lieu': "Place du Panthéon"
        }, {
            'titre': "Défilé",
            'date': "21/04/2016",
            'heure': "15h - 16h30",
            'lieu': "Rues de Paris"
        }, {
            'titre': "Athlétisme et Natation",
            'date': "21/04/2016",
            'heure': "17h - 19h",
            'lieu': "Stade Suzanne Lenglen, Piscine La Plaie"
        }, {
            'titre': "Dîner",
            'date': "21/04/2016",
            'heure': "19h30 - 21h",
            'lieu': "RU Halle aux Farines"
        }, {
            'titre': "Soirée",
            'date': "21/04/2016",
            'heure': "20h30 - 02h30",
            'lieu': "Lz Zigzag (Champs Élysées)"
        }, {
            'titre': "Petit déjeuner",
            'date': "22/04/2016",
            'heure': "07h30 - 09h",
            'lieu': "Sites sportifs"
        }, {
            'titre': "Phases qualificatives et finales",
            'date': "22/04/2016",
            'heure': "08h - 12h00",
            'lieu': "Sites sportifs"
        }, {
            'titre': "Déjeuner",
            'date': "22/04/2016",
            'heure': "12h00 - 13h30",
            'lieu': "Sites sportifs"
        }, {
            'titre': "Phases qualificatives, finales et Handibasket",
            'date': "22/04/2016",
            'heure': "13h30 - 18h",
            'lieu': "Sites sportifs"
        }, {
            'titre': "Passage dans les hôtels",
            'date': "22/04/2016",
            'heure': "18h - 20h",
            'lieu': ""
        }, {
            'titre': 'Dîner',
            'date': '22/04/2016',
            'heure': '20h - 21h30',
            'lieu': 'La Palmeraie'
        }, {
            'titre': 'Soirée',
            'date': '22/04/2016',
            'heure': '20h45 - 02h',
            'lieu': 'La Palmeraie'
        }, {
            'titre': 'Petit déjeuner',
            'date': '23/04/2016',
            'heure': '07h - 09h',
            'lieu': 'Sites sportifs'
        }, {
            'titre': 'Phases finales et Cross',
            'date': '23/04/2016',
            'heure': '08h - 12h',
            'lieu': 'Sites sportifs'
        }, {
            'titre': 'Déjeuner',
            'date': '23/04/2016',
            'heure': '12h - 13h30',
            'lieu': 'Sites sportifs'
        }, {
            'titre': 'Phases finales, Musculation et Cécifoot',
            'date': '23/04/2016',
            'heure': '13h30 - 18h',
            'lieu': 'Sites sportifs'
        }, {
            'titre': 'Passage dans les hôtels',
            'date': '23/04/2016',
            'heure': '18h - 20h',
            'lieu': ''
        }, {
            'titre': 'Dîner',
            'date': '23/04/2016',
            'heure': '20h - 21h30',
            'lieu': 'La Palmeraie'
        }, {
            'titre': 'Soirée et cérémonie de cloture',
            'date': '23/04/2016',
            'heure': '20h45 - 04h',
            'lieu': 'La Palmeraie'
        }, {
            'titre': 'Petit déjeuner et départ des délégations',
            'date': '24/04/2016',
            'heure': '08h30 - 12h30',
            'lieu': 'Hôtels'
        }]

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
