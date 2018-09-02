require('../services/home');
var swal = require('sweetalert');
var Chart = require('chart.js');

angular.module(MODULE_NAME)
.controller('homeCtrl', ['$scope', 'HomeService', '$timeout', function($scope, HomeService, $timeout, ) {
  var ctrl = this;

  $scope.init = init;
  $scope.btnGetDetalle = btnGetDetalle;
  $scope.btnGetDatos = btnGetDatos;
  $scope.btnOpenModal = btnOpenModal;
  $scope.initMenu = initMenu;

  $scope.inicio = {
    loading: false,
    list: [],
    detalle: {},
    msj: "",
    show: {
      monitoreo: false,
      viaje: false,
      taller: false,
      vehiculo: false,
      menu: true
    },
    count: {}
  }

  function btnGetDatos(id) {
    if (id*1 === 0) {
      initMenu()
    }

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

  function initMenu() {
    $scope.inicio.loading = true;
    $scope.inicio.msj = "Mostrando estado general de la flotilla"
    $scope.inicio.show.viaje = false
    $scope.inicio.show.monitoreo = false
    $scope.inicio.show.taller = false
    $scope.inicio.show.vehiculo = false
    $scope.inicio.show.menu = true

    HomeService.getCount()
    .success((res)=> {
      $scope.inicio.count = res.result
      $scope.inicio.loading = false
      loadChart()
    })

  }

  function init() {
    $scope.inicio.loading = true;
    $scope.inicio.msj = "Detalles de los viajes"
    $scope.inicio.show.viaje = true
    $scope.inicio.show.monitoreo = false
    $scope.inicio.show.taller = false
    $scope.inicio.show.vehiculo = false
    $scope.inicio.show.menu = false
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

  function getMonitoreo() {
    $scope.inicio.msj = "Detalles de los monitoreos"
    $scope.inicio.loading = true;
    $scope.inicio.show.viaje = false
    $scope.inicio.show.monitoreo = true
    $scope.inicio.show.taller = false
    $scope.inicio.show.vehiculo = false
    $scope.inicio.show.menu = false
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
    $scope.inicio.show.menu = false
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
    $scope.inicio.show.menu = false
    HomeService.getVehiculo()
    .success((res)=> {
      $scope.inicio.loading = false;
      $scope.inicio.list = res
    })
  }

  function btnOpenModal(id) {
    if (id*1 === 1) {
      $("#modal-viaje").modal("show")
    }
    if (id*1 === 2) {
      $("#modal-monitoreo").modal("show")
    }
    if (id*1 === 3) {
      $("#modal-taller").modal("show")
    }
    if (id*1 === 4) {
      $("#modal-vehiculo").modal("show")
    }
  }

  function loadChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });

    var ctx = document.getElementById('myChartPie').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
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
