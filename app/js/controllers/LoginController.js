(function() {
    'use strict';

    angular.module('MeuPresidenteApp')
        .controller('LoginController', ['$rootScope', '$scope', '$hideDialog',
            function($rootScope, $scope, $hideDialog) {
            	$rootScope.eleitor = {};

                $scope.login = function() {
                    $rootScope.isLogged = true;
                    store.set('cpf', $rootScope.eleitor.cpf);
                    $hideDialog();
                };
            }
        ]);
})();
