'use strict';

describe('Service: threads', function () {

  // load the service's module
  beforeEach(module('quickchanApp'));

  // instantiate service
  var threads;
  beforeEach(inject(function (_threads_) {
    threads = _threads_;
  }));

  it('should do something', function () {
    expect(!!threads).toBe(true);
  });

});
