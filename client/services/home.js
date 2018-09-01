// var url = helpers.getUrl();

angular.module(MODULE_NAME)
.service('HomeService', ['$http', function($http) {
  var url = "https://localhost:3003";
  var urlBase = url + '/home';

  this.getInit = function() {
    return $http.get(urlBase + '/get-init');
  }

}]);
