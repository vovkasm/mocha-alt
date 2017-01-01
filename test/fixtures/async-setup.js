module.exports = function (done) {
  setTimeout(function () {
    global.testValue = 'ok'
    done()
  }, 10)
}
