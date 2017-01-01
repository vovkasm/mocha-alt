/* eslint-env mocha */

const assert = require('assert')
const childProcess = require('child_process')
const path = require('path')

describe('Async requires', function () {
  it('can do some work asynchronously before test', function () {
    const runner = path.resolve(__dirname, '../bin/mocha-alt')
    const setup = path.resolve(__dirname, 'fixtures/async-setup.js')
    const test = path.resolve(__dirname, 'fixtures/async-setup.spec.js')
    const args = [runner, '--reporter', 'json', '--require', setup, test]
    const child = childProcess.spawnSync(process.execPath, args, {encoding: 'utf8'})
    assert.equal(child.status, 0, 'async-setup.spec.js failed, output was: ' + child.stdout)
  })
})
