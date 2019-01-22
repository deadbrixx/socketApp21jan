var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var http = require('http');
var socketIO = require('socket.io');

var publicFolder = path.join(__dirname, '../public');
app.use(express.static(publicFolder));

//for manual http server, we are calling http method
var server = http.createServer(app);

//for create socketio server[webscocket server]
var io = socketIO(server);
io.on('connection',(socket)=>{
    console.log("New User Connected...");

    //Here we are emiting custom events through socket.emit()
    socket.emit('newMessage', {
        name: 'Manish Bros',
        email: 'moongerraja@gmail.com',
        message: 'Mil kar khushi hui'
    });

    //Here we are listening custom event through socket.on()
    socket.on('sendMessage', (anyparameter) => {
        console.log("Data here", anyparameter);
    })

socket.on('disconnect',()=>{
    console.log("User Disconnected!")
})
})


// app.listen(port, (err) => {
server.listen(port, (err) => {
    if(err) throw err;
    else{
        console.log(`Server listening on ${port}`);
    }
})
