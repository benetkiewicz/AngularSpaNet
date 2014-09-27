///<reference path="~/scripts/jasmine.js"/>
///<reference path="~/scripts/angular.js"/>
///<reference path="~/scripts/angular-route.js"/>
///<reference path="~/scripts/angular-mocks.js"/>

///<reference path="~/scripts/App/app.js"/>
///<reference path="~/scripts/App/services/carManufacturersService.js"/>
describe("carManufacturerService tests", function() {
    var $httpBackend, manufacturersService;
    beforeEach(function() {
        module('registration');
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            manufacturersService = $injector.get('carManufacturersService');
        });

    });

    it('should return some regions', function() {
        $httpBackend.when("GET", "/api/CarManufacturers/").respond([{ "Id": "E", "Name": "Europe" }, { "Id": "A", "Name": "America" }]);
        manufacturersService.getWorldRegions().then(function (data) {
            expect(data.data.length).toBeGreaterThan(0);
        });
        
        $httpBackend.flush();
    });
});
