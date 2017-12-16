//引入相关依赖
let app = require('express')(),
	http = require('http').Server(app),
	// path = require('path'),
	io = require('socket.io')(http)


//配置express
app.get('/', (req, res)=>{
	res.sendFile(__dirname +'/index.html')
})

//配置socket.io
io.on('connection', (socket)=>{
	console.log('a user connected')
	socket.on('chat message', function(msg){
		console.log('message: ' + msg)
		io.emit('chat message', msg)
	})
	socket.on('disconnect', ()=>{
		console.log('a user disconnected')
	})
})

//开启服务
http.listen(process.env.PORT || 3000, ()=>{
	console.log('listening on *: 3000')
})



