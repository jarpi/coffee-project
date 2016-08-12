# required modules
_              = require "underscore"
async          = require "async"
http           = require "http"
express        = require "express"
path           = require "path"
methodOverride = require "method-override"
bodyParser     = require "body-parser"
socketio       = require "socket.io"
errorHandler   = require "error-handler"
stream 		   = require "stream"
util		   = require "util"

log       = require "../lib/log"
Generator = require "./lib/Generator"
WebsocketStream = require "./lib/WebsocketStream"

app       = express()
server    = http.createServer app
io        = socketio.listen server
ss 		  = require('socket.io-stream');

# collection of client sockets
sockets = []

# create a generator of data
persons = new Generator [ "first", "last", "gender", "birthday", "age", "ssn"]

# distribute data over the websockets
# persons.on "data", (data) ->
# 	data.timestamp = Date.now()
#	socket.emit "persons:create", data for socket in sockets

persons.start()
# persons.pipe(process.stdout)

io.on "connect_error", (err) ->
	console.dir(err)

# websocket connection logic
io.on "connection", (socket) ->
	console.dir('connection received')
	# add socket to client sockets
	sockets.push socket
	# socket.emit "persons:create", 'asdasdasd'
	# persons.pipe(new WebsocketStream(socket))
	socket.emit("data", {test:123})
	stream = ss.createStream()
	ss(socket).emit("data", stream)
	persons.pipe(stream)
	log.info "Socket connected, #{sockets.length} client(s) active"

	# disconnect logic
	socket.on "disconnect", ->
		console.dir('connection disconnect')
		# remove socket from client sockets
		sockets.splice sockets.indexOf(socket), 1
		log.info "Socket disconnected, #{sockets.length} client(s) active"

# start the server
server.listen 4000
log.info "Listening on 4000"
