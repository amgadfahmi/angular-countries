/**
 * Created by coichedid on 21/04/15.
 */
'use strict';

angular.module('angular-data-service').service('AngularCountriesConfig', function() {
    var internalKey = '';
    this.setKey = function(key) {
        internalKey = key;
    };
    this.getKey = function() {
        return internalKey;
    };

}).factory('AngularCountries', ['$http', 'AngularCountriesConfig',

    function(http, config) {

        // Angular countries service logic
        var endpoint = {};
        endpoint.base = 'https://restcountries-v1.p.mashape.com/';
        endpoint.all = endpoint.base + 'all';
        endpoint.byCode = endpoint.base + 'alpha/@val';
        endpoint.byCodes = endpoint.base + 'alpha/?codes=@val';
        endpoint.byName = endpoint.base + 'name/@val';
        endpoint.byCallingCode = endpoint.base + 'callingcode/@val';
        endpoint.byCapitalCity = endpoint.base + 'capital/@val';
        endpoint.byCurrency = endpoint.base + 'currency/@val';
        endpoint.byLanguage = endpoint.base + 'lang/@val';
        endpoint.byRegion = endpoint.base + 'region/@val';
        endpoint.bySubRegion = endpoint.base + 'subregion/@val';

        endpoint.config = {
            headers: {
                'X-Mashape-Key': config.getKey(),
                'Accept': 'application/json'
            }
        };


        function validate() {
            if (!config.getKey()) {
                throw new Error('You can\'t use this service until you have a valid key');
            }
        }
        // Public API
        return {
            getAll: function() {
                validate();
                var url = endpoint.all;
                return http.get(url, endpoint.config);
            },
            getByCode: function(code) {
               validate();
                var url = endpoint.byCode.replace('@val', code);
                return http.get(url, endpoint.config);
            },
            getByCodes: function() {
               validate();
                var values = Array.prototype.slice.call(arguments, 0).join(';');
                var url = endpoint.byCodes.replace('@val', values);
                return http.get(url, endpoint.config);
            },
            getByName: function(name) {
               validate();
                var url = endpoint.byName.replace('@val', name);
                return http.get(url, endpoint.config);
            },
            getByCallingCode: function(code) {
               validate();
                var url = endpoint.byCallingCode.replace('@val', code);
                return http.get(url, endpoint.config);
            },
            getByCapital: function(capital) {
               validate();
                var url = endpoint.byCapitalCity.replace('@val', capital);
                return http.get(url, endpoint.config);
            },
            getByCurrency: function(currency) {
               validate();
                var url = endpoint.byCurrency.replace('@val', currency);
                return http.get(url, endpoint.config);
            },
            getByLanguage: function(language) {
               validate();
                var url = endpoint.byLanguage.replace('@val', language);
                return http.get(url, endpoint.config);
            },
            getByRegion: function(region) {
               validate();
                var url = endpoint.byRegion.replace('@val', region);
                return http.get(url, endpoint.config);
            },
            getBySubRegion: function(subRegion) {
               validate();
                var url = endpoint.bySubRegion.replace('@val', subRegion);
                return http.get(url, endpoint.config);
            }

        };
    }
]);