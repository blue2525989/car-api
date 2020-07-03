'use strict'

const fileUploadController = require('../controllers/fileUploadController.js')

// https://stackoverflow.com/questions/27766623/how-to-store-routes-in-separate-files-when-using-hapi

module.exports = [
  {
    method: 'POST',
    path: '/upload-file',
    handler: fileUploadController.uploadFile
  }
]
// server.route({
//   method: 'GET',
//       path: '/upload-file',
//       handler: fileUploadController.uploadFile
// })
