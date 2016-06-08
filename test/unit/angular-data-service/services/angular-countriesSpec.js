(function() {
    // Koko Controller Spec
    describe('Angular countries service tests', function() {
        // Initialize global variables
        var KokoController,
            countriesService,
            scope,
            $httpBackend,
            $stateParams,
            $location;

        // The $resource service augments the response object with methods for updating and deleting the resource.
        // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
        // the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
        // When the toEqualData matcher compares two objects, it takes only object properties into
        // account and ignores methods.
        // beforeEach(function() {
        //   jasmine.addMatchers({
        //     toEqualData: function(util, customEqualityTesters) {
        //       return {
        //         compare: function(actual, expected) {
        //           return {
        //             pass: angular.equals(actual, expected)
        //           };
        //         }
        //       };
        //     }
        //   });
        // });

        // Then we can start by loading the main application module
        beforeEach(module('angular-data-service'));
        beforeEach(inject(function(AngularCountriesConfig) {
            AngularCountriesConfig.setKey('JzlN8nuEDKmshnOWIoN8SHIlf7Lcp1tNuRNjsn0Q31S8QTRW3t');
        }));


        beforeEach(inject(function(AngularCountries, $httpBackend) {
            countriesService = AngularCountries;
            httpBackend = $httpBackend;
        }));


        it("Testing get by code api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/alpha/us").respond({
                name: 'United States'
            });
            countriesService.getByCode("us").then(function(result) {
                expect(result.data.name).to.equal("United States");
            });
            httpBackend.flush();
        });

        // it("Testing get by codes api", function() {
        //     httpBackend.whenGET("https://restcountries-v1.p.mashape.com/alpha/?codes=us%3Bco").respond({
        //         name: 'United States'
        //     }, {
        //         name: 'Colombia'
        //     });
        //     countriesService.getByCodes('us', 'co').then(function(result) {
        //         expect(result.data.name).to.equal("United States");
        //     });
        //     httpBackend.flush();
        // });


        //avoided codes 

        it("Testing get by name api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/name/norge").respond({
                name: 'Norway'
            });
            countriesService.getByName('norge').then(function(result) {
                expect(result.data.name).to.equal("Norway");
            });
            httpBackend.flush();
        });

        it("Testing get by calling code api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/callingcode/57").respond({
                name: 'Colombia'
            });
            countriesService.getByCallingCode(57).then(function(result) {
                expect(result.data.name).to.equal("Colombia");
            });
            httpBackend.flush();
        });

        it("Testing get by Capital api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/capital/tallinn").respond({
                name: 'Estonia'
            });
            countriesService.getByCapital('tallinn').then(function(result) {
                expect(result.data.name).to.equal("Estonia");
            });
            httpBackend.flush();
        });


        it("Testing get by currency api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/currency/NOK").respond({
                name: 'Bouvet Island'
            });
            countriesService.getByCurrency('NOK').then(function(result) {
                expect(result.data.name).to.equal("Bouvet Island");
            });
            httpBackend.flush();
        });

        it("Testing get by language api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/lang/et").respond({
                name: 'Estonia'
            });
            countriesService.getByLanguage('et').then(function(result) {
                expect(result.data.name).to.equal("Estonia");
            });
            httpBackend.flush();
        });

        it("Testing get by region api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/region/africa").respond({
                name: 'Algeria'
            });
            countriesService.getByRegion('africa').then(function(result) {
                expect(result.data.name).to.equal("Algeria");
            });
            httpBackend.flush();
        });
    
        it("Testing get by sub region api", function() {
            httpBackend.whenGET("https://restcountries-v1.p.mashape.com/subregion/southern%20africa").respond(
               { name: 'Botswana'},
               { name: 'Lesotho'},
               { name: 'Namibia'},
               { name: 'South Africa'},
               { name: 'Swaziland'}
                );
            countriesService.getBySubRegion('southern%20africa').then(function(result) {
                expect(result.data.name).to.equal("Botswana");
            });
            httpBackend.flush();
        });

    });
}());