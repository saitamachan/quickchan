'use strict';

describe('Directive: formthread', function () {

  // load the directive's module
  beforeEach(module('quickchanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<formthread></formthread>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formthread directive');
  }));
});
