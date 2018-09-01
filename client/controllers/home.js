require('../services/home');
var swal = require('sweetalert');

angular.module(MODULE_NAME)
.controller('homeCtrl', ['$scope', 'HomeService', '$timeout', 'socket', function($scope, HomeService, $timeout, socket) {
  var ctrl = this;

  $scope.init = init;
  $scope.inicio = {
    list: []
  }

  function init() {
    HomeService.getInit().success((res)=> {
      if (res) {
        $scope.inicio.list = res;
      } else {
        swal({
          icon: "error",
          title: "Opss!",
          text: "Hubo un error [getInit]"
        })
      }
    })
  }


}]);

    angular.module(MODULE_NAME)
    .directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;
              element.bind('change', function(){
                 scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
     }]);
