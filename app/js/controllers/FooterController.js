(function() {
    'use strict';

    angular.module('MeuPresidenteApp')
        .controller('FooterController', ['$scope',
            'CandidatosService',
            function($scope,
                CandidatosService) {
                var Candidatos = CandidatosService.getCandidatos();

                function init() {
                    $scope.chartConfig = {
                        'options': {
                            chart: {
                                type: 'column'
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            }
                        },
                        series: Candidatos,
                        title: {
                            text: 'Eleições 2014'
                        },
                        xAxis: {
                            categories: [
                                'Candidatos'
                            ]
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Votos'
                            }
                        }
                    };
                }

                init();

                socket.on('atualiza grafico', function() {
                    Candidatos = CandidatosService.getCandidatos(true);
                    $scope.$apply(init());
                });
            }
        ]);
})();
