// var url = helpers.getUrl();

angular.module(MODULE_NAME)
.service('HomeService', ['$http', function($http) {

  isProduction = true
  PUERTO = 3010

  if (isProduction) {
    uri = `http://35.196.109.19:${PUERTO}`
  } else {
    uri = `http://localhost:${PUERTO}`
  }


  var url = uri
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
