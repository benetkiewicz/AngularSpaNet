(function() {
    angular
        .module("registration")
        .service("carManufacturersService", [
            "$http", function($http) {
                var urlBase = "/api/CarManufacturers";

                this.getCarManufacturersByWorldRegion = function(worldRegion) {
                    return $http.get(urlBase + "/" + worldRegion);
                };

                this.getWorldRegions = function() {
                    return $http.get(urlBase + "/");
                };
            }
        ]);
})();
