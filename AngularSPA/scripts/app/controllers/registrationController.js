app.controller('RegistrationCtrl', ['$scope', '$location', function ($scope, $location) {
    var steps = ['step1', 'step2', 'step3'];
    $scope.currentStep = 0;
    $scope.viewModel = {};
    $scope.nextStep = function () {
        $scope.currentStep++;
        $location.path(steps[$scope.currentStep]);
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
}]);