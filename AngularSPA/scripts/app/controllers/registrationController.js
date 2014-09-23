(function() {
    angular
        .module("registration")
        .controller("RegistrationCtrl", Registration);
    Registration.$inject = ["$location", "carManufacturersService", "registrationService"];

    function Registration($location, carManufacturersService, registrationService) {
        var registration = this;

        var steps = ["step1", "step2", "step3"];
        registration.currentStep = 0;
        registration.viewModel = {};
        registration.submitted = false;
        registration.worldRegions = [];
        registration.list = "";

        carManufacturersService.getWorldRegions()
            .success(function(data) {
                registration.worldRegions = data;
        });

        registration.nextStep = function(form) {
            registration.submitted = true;
            if (form.$valid) {
                registration.currentStep++;
                $location.path(steps[registration.currentStep]);
                registration.submitted = false;
            }
        };

        registration.prevStep = function() {
            registration.currentStep--;
            $location.path(steps[registration.currentStep]);
        };

        registration.isLastStep = function() {
            return registration.currentStep === steps.length - 1;
        };

        registration.getCurrentStep = function() {
            return steps[registration.currentStep];
        };

        registration.updateCarManufacturers = function (worldRegion) {
            carManufacturersService.getCarManufacturersByWorldRegion(worldRegion.Id)
                .success(function(data) {
                    registration.carManufacturers = data;
                });
        };

        registration.submit = function(viewModel) {
            registrationService
                .register(viewModel)
                .success(function(data) {
                    alert("OK!");
                })
                .error(function(data) {
                    registration.list = data.join("<br />");
                });
        };
    }
})();