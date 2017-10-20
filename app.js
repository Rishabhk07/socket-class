/**
 * Created by rishabhkhanna on 20/10/17.
 */
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
let allSockets = [];
app.use(express.static(path.join(__dirname, "public")));
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname, "/public/player.html"))
});

app.get('/start',(req,res)=>{
    res.sendFile(path.join(__dirname, "/public/playButton.html"))
})

io.on('connect',(socket)=>{
   console.log("Socket connected");
   allSockets.push(socket.id);

    socket.on('random',()=>{
       console.log("Random Clicked")
        // if(allSockets[socket.id] !== null){
        //    allSockets[socket.id] = null;
        // }
        socket.broadcast.emit('play','play');
    });

    socket.on('together',()=>{
        // if(allSockets[socket.id] !== null){
        //     allSockets[socket.id] = null;
        // }
        socket.broadcast.emit('play','play');
    });

});

http.listen('9999',()=>{
    console.log("Rishabh Khanna")
});

