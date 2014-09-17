(function() {
    'use strict';

    angular.module('MeuPresidenteApp', ['highcharts-ng', 'ngMaterial'])
        .run(['$rootScope', '$materialDialog',
            function($rootScope, $materialDialog) {
                if (!store.get('cpf')) {
                    $rootScope.isLogged = false;
                    $materialDialog({
                        templateUrl: 'templates/login-material-dialog.html',
                        controller: 'LoginController',
                        clickOutsideToClose: false,
                        escapeToClose: false
                    });
                }

                $rootScope.isLogged = true;
            }
        ]);
})();
