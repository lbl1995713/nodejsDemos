var connect = require('connect');
var morgan = require('morgan') //用户请求日志中间件
var app = connect()
    .use(morgan('dev'))
    .use(function (req, res) {
        res.end('hello world\n');
    })
    .listen(3000, ()=>{
    	console.log('success listen port on 3000')
    });