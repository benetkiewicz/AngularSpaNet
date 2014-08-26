(function() {
    angular
        .module("registration")
        .service("carMakeService", [
            "$http", function($http) {
                var urlBase = "/api/CarMake";

                this.getCarMakes = function(continent) {
                    return $http.get(urlBase + "/" + continent);
                };
            }
        ]);
})();
