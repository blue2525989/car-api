'use strict'

const hapi = require('@hapi/hapi')
const fileUploadRoutes = require('./routes/fileUploadRoutes.js')

const routes = [].concat(fileUploadRoutes)

const server = hapi.server({
  port: 3000,
  host: 'localhost'
})

for (let route of routes) {
  console.log(route)
  server.route(route)
}


const init = async () => {
  await server.start()
  console.log('Server running on %s', server.info.uri)
}


process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()


module.exports = server
