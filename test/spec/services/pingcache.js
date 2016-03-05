'use strict';

describe('Service: pingcache', function () {

  // load the service's module
  beforeEach(module('quickchanApp'));

  // instantiate service
  var pingcache;
  beforeEach(inject(function (_pingcache_) {
    pingcache = _pingcache_;
  }));

  it('should do something', function () {
    expect(!!pingcache).toBe(true);
  });

});
