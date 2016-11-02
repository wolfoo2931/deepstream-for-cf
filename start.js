const DeepstreamServer = require('deepstream.io')
const C = DeepstreamServer.constants

const server = new DeepstreamServer({
  host: 'localhost',
  port: process.env.PORT || 6020,
  tcpPort: 6021
})

server.set('dataTransforms', [{
  topic: C.TOPIC.RPC,
  action: C.ACTIONS.REQUEST,
  transform: function(data, metaData) {}
}])

server.start();
