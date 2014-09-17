(function() {
    'use strict';

    angular.module('MeuPresidenteApp')
    // .factory('VotacaoService', ['Restangular', function(Restangular){
    .factory('VotacaoService', [
        function() {
            function votar(nomeCandidato, codEleitor) {
                // Restangular.one('candidatos', nomeCandidato).post(codEleitor);
                socket.emit('votando', {
                    name: nomeCandidato,
                    cod: codEleitor
                });
            }

            return {
                votar: votar
            };
        }
    ])
})();
