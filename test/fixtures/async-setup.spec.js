/* eslint-env mocha */

const assert = require('assert')

it('test value should be set', function () {
  assert.strictEqual(global.testValue, 'ok')
})
