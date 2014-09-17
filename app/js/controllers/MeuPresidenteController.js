(function() {
    'use strict';

    angular.module('MeuPresidenteApp')
        .controller('MeuPresidenteController', ['$scope',
            'VotacaoService',
            'CandidatosService',
            function($scope,
            	VotacaoService,
                CandidatosService) {

                var candidatos = CandidatosService.getCandidatos();
                
                $scope.candidatos = {
                    linha1: candidatos.slice(0, 3),
                    linha2: candidatos.slice(3, 6),
                    linha3: candidatos.slice(6, 9),
                    linha4: candidatos.slice(9, 12)
                };

                $scope.votar = function(nomeCandidato, codEleitor) {
                    VotacaoService.votar(nomeCandidato, codEleitor);
                };
            }
        ]);
})();
