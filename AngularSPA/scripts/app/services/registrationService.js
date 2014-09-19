(function () {
    angular
        .module("registration")
        .service("registrationService", [
            "$http", function ($http) {
                var urlBase = "/api/Registration";

                this.register = function (viewModel) {
                    return $http.post(urlBase, viewModel);
                };
            }
        ]);
})();
