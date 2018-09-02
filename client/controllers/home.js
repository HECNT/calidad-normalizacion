require('../services/home');
var swal = require('sweetalert');

angular.module(MODULE_NAME)
.controller('homeCtrl', ['$scope', 'HomeService', '$timeout', function($scope, HomeService, $timeout, ) {
  var ctrl = this;

  $scope.init = init;
  $scope.btnGetDetalle = btnGetDetalle;
  $scope.btnGetDatos = btnGetDatos;

  $scope.inicio = {
    loading: false,
    list: [],
    detalle: {},
    msj: "",
    show: {
      monitoreo: false,
      viaje: true,
      taller: false,
      vehiculo: false
    }
  }

  function init() {
    $scope.inicio.loading = true;
    $scope.inicio.msj = "Detalles de los viajes"
    $scope.inicio.show.viaje = true
    $scope.inicio.show.monitoreo = false
    $scope.inicio.show.taller = false
    $scope.inicio.show.vehiculo = false
    HomeService.getInit().success((res)=> {
      $scope.inicio.loading = false;
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

  function btnGetDetalle(l) {
    $('#modal-detalle').modal('show')
    $scope.inicio.detalle = l
  }

  function btnGetDatos(id) {
    if (id*1 === 1) {
      init()
    }

    if (id*1 === 2) {
      getMonitoreo()
    }

    if (id*1 === 3) {
      getTaller()
    }

    if (id*1 === 4) {
      getVehiculo()
    }
  }

  function getMonitoreo() {
    $scope.inicio.msj = "Detalles de los monitoreos"
    $scope.inicio.loading = true;
    $scope.inicio.show.viaje = false
    $scope.inicio.show.monitoreo = true
    $scope.inicio.show.taller = false
    $scope.inicio.show.vehiculo = false
    HomeService.getMonitoreo()
    .success((res)=> {
      $scope.inicio.loading = false;
      $scope.inicio.list = res
    })
  }

  function getTaller() {
    $scope.inicio.msj = "Detalle del taller"
    $scope.inicio.loading = true;
    $scope.inicio.show.viaje = false
    $scope.inicio.show.monitoreo = false
    $scope.inicio.show.taller = true
    $scope.inicio.show.vehiculo = false
    HomeService.getTaller()
    .success((res)=> {
      $scope.inicio.loading = false;
      $scope.inicio.list = res
    })
  }

  function getVehiculo() {
    $scope.inicio.msj = "Detalle del los vehiculos"
    $scope.inicio.loading = true;
    $scope.inicio.show.viaje = false
    $scope.inicio.show.monitoreo = false
    $scope.inicio.show.taller = false
    $scope.inicio.show.vehiculo = true
    HomeService.getVehiculo()
    .success((res)=> {
      $scope.inicio.loading = false;
      $scope.inicio.list = res
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
