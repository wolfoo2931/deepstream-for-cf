const DeepstreamServer = require('deepstream.io')
const C = DeepstreamServer.constants

const server = new DeepstreamServer({
  port: process.env.PORT || 6020,
  tcpServerEnabled: false
})

server.set('dataTransforms', [{
  topic: C.TOPIC.RPC,
  action: C.ACTIONS.REQUEST,
  transform: function(data, metaData) {}
}])

server.start();
