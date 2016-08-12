{ Stream } = require "stream"

log = require "../../lib/log"

class WebsocketStream extends Stream.Writable

	constructor: ( @ws ) ->
		super
		@ws.writable = true
		log.info  "WebsocketStream initialized"

	write: (chunk, enc, done) => 
		# console.log(1)
		# console.dir("Websocket " + chunk.toString())
		# console.dir(@ws)
		@ws.emit "persons:create", chunk
		# @ws.write(chunk)

	end: (buf) => 
		console.log('1')
		@ws.write(buf) if arguments.length;
		@ws.writable = false;

module.exports = WebsocketStream 
