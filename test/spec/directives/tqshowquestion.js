'use strict';

describe('Directive: tqShowQuestion', function () {

  // load the directive's module
  beforeEach(module('tequeFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tq-show-question></tq-show-question>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tqShowQuestion directive');
  }));
});
