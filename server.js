const app = require('express')();
const server = require('http').createServer(app);
const logger = require('./src/lib/logger.js');
const PORT = process.env.PORT || 5000;

const io = require('socket.io')(server,{
    cors:{
        origin:"*",
        credentials:true,
    }
});
app.get('/',function(req,res){
    res.json({a:"aasd"})
})
io.on('connection',function(socket){
    logger.info('connection');
})

server.listen(PORT,()=> console.log(`Server has started on port ${PORT}`));