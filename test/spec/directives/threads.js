'use strict';

describe('Directive: threads', function () {

  // load the directive's module
  beforeEach(module('quickchanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<threads></threads>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the threads directive');
  }));
});
