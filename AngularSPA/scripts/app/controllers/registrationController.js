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
        registration.locations = [];

        carManufacturersService.getWorldRegions()
            .success(function(data) {
                var tmpLocations = [];
                data.forEach(function(item) {
                    var location = { id: item.Id, name: item.Name };
                    tmpLocations.push(location);
                });
                registration.locations = tmpLocations;
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

        registration.updateCarMakes = function () {
            console.dir(registration.viewModel.location);
            carManufacturersService.getCarManufacturersByWorldRegion(registration.viewModel.location.id)
                .success(function(data) {
                    registration.carMakes = data;
                });
        };

        registration.submit = function (viewModel) {
            registrationService
                .register(viewModel)
                .success(function(data) {
                    console.dir(data);
                    alert("OK!");
                })
                .error(function(data) {
                    console.dir(data);
                    alert("Failed!");
                });
        };
    }
})();