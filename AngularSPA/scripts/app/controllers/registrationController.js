app.controller('RegistrationCtrl', ['$scope', '$location', 'carMakeService', function ($scope, $location, carMakeService) {
    var steps = ['step1', 'step2', 'step3'];
    $scope.currentStep = 0;
    $scope.viewModel = {};
    $scope.submitted = false;
    $scope.locations = [{id: 'E', name: 'Europe'}, {id: 'A', name: 'America'}];
    
    $scope.nextStep = function (form) {
        $scope.submitted = true;
        if (form.$valid) {
            $scope.currentStep++;
            $location.path(steps[$scope.currentStep]);
            $scope.submitted = false;
        }
    };

    $scope.prevStep = function() {
        $scope.currentStep--;
        $location.path(steps[$scope.currentStep]);
    };

    $scope.isLastStep = function() {
        return $scope.currentStep == steps.length - 1;
    };

    $scope.getCurrentStep = function() {
        return steps[$scope.currentStep];
    };

    $scope.updateCarMakes = function() {
        carMakeService.getCarMakes($scope.viewModel.location.id).success(function(data) {
            $scope.carMakes = data;
        });
    };

    $scope.submit = function() {
        alert('Submitted!');
    };
}]);