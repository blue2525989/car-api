'use strict'

module.exports = {
  async uploadFile (request, h) {
    console.log(request.payload)
    return 'u made it'
  }
}
