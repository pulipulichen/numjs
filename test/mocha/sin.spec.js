/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('sin', function () {
  it('should work on vectors', function () {
    var x = nj.array([-Math.PI / 2, 0, Math.PI / 2]);
    expect(nj.sin(x).round().tolist())
      .to.eql([-1, 0, 1]);
  });
});
