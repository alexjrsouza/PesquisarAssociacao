angular.module("pesquisarAssociacao", []);
		angular.module("pesquisarAssociacao").controller("pesquisarAssociacaoCtrl", function ($scope, $http) {
			$scope.app = "Pesquisar Associacao";
			$scope.associacoes = [];
			$scope.cds = [];

			var carregarAssociacao = function () { 
 				$http.get("http://localhost:8180/rest-test/pesquisarAssociacao/associacao").success(function (data) { 
 					$scope.associacoes = data;
 				}).error(function (data, status) { 
 					$scope.message = "Aconteceu um problema: " + data; 
 				}); 
 			};
			var carregarCds = function (novaAssoc) {
				$http.get("http://localhost:8180/rest-test/pesquisarAssociacao/cds").success(function (data) { 
 					$scope.cds = data; 
 				}); 
 			}; 

			$scope.isAssociacaoSelecionado = function (associacoes) {
				return associacoes.some(function (associacao) {
					return associacao.selecionado;
				});
			};
			carregarCds();
		});