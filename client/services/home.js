// var url = helpers.getUrl();

angular.module(MODULE_NAME)
.service('HomeService', ['$http', function($http) {
  var url = "https://35.229.59.251:3010";
  var urlBase = url + '/home';

  this.getInit = function() {
    return $http.get(urlBase + '/get-init');
  }

  this.getMonitoreo = function() {
    return $http.get(urlBase + '/get-monitoreo');
  }

  this.getTaller = function() {
    return $http.get(urlBase + '/get-taller');
  }

  this.getVehiculo = function() {
    return $http.get(urlBase + '/get-vehiculo');
  }

  this.getCount = function() {
    return $http.get(urlBase + '/get-count');
  }

}]);
