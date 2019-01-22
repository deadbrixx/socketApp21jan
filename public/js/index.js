var socket = io();
           socket.on('connect',function (){
               console.log("Connected to server Successfully...")

               //Here we are emiting custom events through socket.emit()
            //    socket.emit('sendMessage', {
            //        from: 'pinkymandal',
            //        message: 'pinkymandal@gmail.com'
            //    })

           });
           socket.on('disconnect',function (){
               console.log("Disconnected to server...")
           });

           //Here we are listening custom event through socket.on()
           socket.on('newMessage', function(anyparameter){
               console.log("For recieving email from server", anyparameter);  
           })
