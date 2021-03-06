/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TopologicalInventory);
  }
}(this, function(expect, TopologicalInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TopologicalInventory.ContainerProject();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ContainerProject', function() {
    it('should create an instance of ContainerProject', function() {
      // uncomment below and update the code to test ContainerProject
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be.a(TopologicalInventory.ContainerProject);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be();
    });

    it('should have the property sourceId (base name: "source_id")', function() {
      // uncomment below and update the code to test the property sourceId
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be();
    });

    it('should have the property sourceRef (base name: "source_ref")', function() {
      // uncomment below and update the code to test the property sourceRef
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenant_id")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new TopologicalInventory.ContainerProject();
      //expect(instance).to.be();
    });

  });

}));
