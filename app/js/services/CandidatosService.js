(function() {
    'use strict';

    angular.module('MeuPresidenteApp')
    // .factory('CandidatoService', ['Restangular', function(Restangular){
    .factory('CandidatosService', [
        function() {
            var candidatos = [{
                name: 'A\xE9cio Neves',
                img: 'images/aecio.jpg',
                data: [49.9]
            }, {
                name: 'Dilma',
                img: 'images/dilma.jpg',
                data: [83.6]
            }, {
                name: 'Eduardo Jorge',
                img: 'images/eduardojorge.jpg',
                data: [48.9]
            }, {
                name: 'Eymael',
                img: 'images/eymael.jpg',
                data: [42.4]
            }, {
                name: 'Levy Fidelix',
                img: 'images/levyfidelix.jpg',
                data: [83.6]
            }, {
                name: 'Luciana Genro',
                img: 'images/lucianagenro.jpg',
                data: [48.9]
            }, {
                name: 'Marina Silva',
                img: 'images/marina.jpg',
                data: [42.4]
            }, {
                name: 'Mauro Iasi',
                img: 'images/mauro.jpg',
                data: [83.6]
            }, {
                name: 'Pastor Everaldo',
                img: 'images/pastor.jpg',
                data: [48.9]
            }, {
                name: 'Rui Costa Pimenta',
                img: 'images/ruicostapimenta.jpg',
                data: [42.4]
            }, {
                name: 'Z\xe9 Maria',
                img: 'images/zemaria.jpg',
                data: [42.4]
            }];

            function getCandidatos(fromServer) {
                if (!candidatos || fromServer) {
                    // candidatos = Restangular.all('candidatos').getList().$objectM
                }

                return candidatos;
            }

            function setCandidatos(newCandidatos) {
                candidatos = newCandidatos;
            }

            return {
                getCandidatos: getCandidatos,
                setCandidatos: setCandidatos
            };
        }
    ]);
})();
