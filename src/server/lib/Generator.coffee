_                = require "underscore"
Chance           = require "chance"
# { EventEmitter } = require "events"
{ Stream } = require "stream"
stream 		 	 = require "stream";
util 			 = require "util";

log = require "../../lib/log"

class Generator extends Stream.Readable

	chance:   null
	timeout:  null
	interval: 1000
	running:  false

	constructor: ( @types ) ->
		super
		log.info  @types 
		@chance = new Chance

	start: ->
		@running = true

		@_read()

		# @emit "started"

	stop: ->
		@running = false

		clearTimeout @timeout

		# @emit "stopped"

	_read: (n) =>
		clearTimeout @timeout

		return unless @running

		data = _.chain @types
			.map (type) => [type, @chance[type]() if @chance[type]]
			.object()
			.value()

		# @emit "data", data
		# console.dir("Generator: " + JSON.stringify(data))
		this.push(JSON.stringify(data))
		@timeout = setTimeout @_read, @interval

module.exports = Generator
