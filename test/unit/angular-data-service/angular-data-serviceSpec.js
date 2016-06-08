'use strict';

describe('MOdule initialize', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('angular-data-service');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('angular-data-service.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('angular-data-service.filters')).to.be.ok;
  });
  

  

  
  it('should load services module', function() {
    expect(hasModule('angular-data-service.services')).to.be.ok;
  });
  

  

});
