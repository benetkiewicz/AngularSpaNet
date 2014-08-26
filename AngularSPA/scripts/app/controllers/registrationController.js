(function() {
    angular
        .module("registration")
        .controller("RegistrationCtrl", Registration);
    Registration.$inject = ["$location", "carMakeService"];

    function Registration($location, carMakeService) {
        var registration = this;

        var steps = ["step1", "step2", "step3"];
        registration.currentStep = 0;
        registration.viewModel = {};
        registration.submitted = false;
        registration.locations = [{ id: "E", name: "Europe" }, { id: "A", name: "America" }];

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

        registration.updateCarMakes = function() {
            carMakeService.getCarMakes(registration.viewModel.location.id).success(function (data) {
                console.dir(data);
                registration.carMakes = data;
            });
        };

        registration.submit = function() {
            alert("Submitted!");
        };
    }
})();
