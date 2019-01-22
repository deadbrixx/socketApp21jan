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
        // socket.emit('taskmsg', {
        //     message: 'Hey Admin, I am new user'
        // });
  //--------------------------------------------------------------      
    //This is example
        socket.emit('taskmsg', {
            message: 'Hey Admin, I am new user'
        });
        socket.broadcast.emit('taskmsg', {
            message: 'New user Joined'
        })

  //----------------------------------------------------------------
    //Here we are listening custom event through socket.on()
    socket.on('sendMessage', (anyparameter) => {
        console.log("Data here", anyparameter);

    //io.emit is used for broadcast the message to every single connection along with itself  
        // io.emit('newMessage', {
        //     from: anyparameter.from,
        //     message: anyparameter.message,
        //     time: new Date().getTime()
        // })
 //------------------------------------------------------------------       
    //socket.broadcast.emit is used for broadcast the message to every single connection except emitter  
        socket.broadcast.emit('newMessage', {
            from: anyparameter.from,
            message: anyparameter.message,
            time: new Date().getTime()
        })
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
