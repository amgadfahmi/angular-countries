(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angular-data-service.config', [])
      .value('angular-data-service.config', {
          debug: true
      });

  // Modules
  
  
  angular.module('angular-data-service.filters', []);
  
  angular.module('angular-data-service.services', []);
  
  
  
  angular.module('angular-data-service',
      [
        'angular-data-service.config',
        'angular-data-service.filters',
        'angular-data-service.services'
      ]);

})(angular);
