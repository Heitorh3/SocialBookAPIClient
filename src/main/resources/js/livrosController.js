angular.module("socialbookApp", []).controller("livrosCtrl", function($scope, $http) {

    $http({
        type : "GET",
        url : "http://localhost:8080/livros",
        headers :  {
                'Content-Type' : 'application/json;charset=UTF-8',
                'Authorization': 'Basic aGVpdG9yOmFkbWlu'
            }
        }).then(function success (livros){
                  $scope.livros = livros.data;
              },function error (livros){
                  $scope.erro = livros.statusText;
              });

    $scope.edit = false;

    $scope.editar = function(livro){
        if(livro == 'new'){
            $scope.edit = true;
        }else{
            $scope.edit = true;
            $scope.livro = livro;
        }
    }

    $scope.novo = function(){
        $scope.livro = "";
    }
});