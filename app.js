/**
 * Created by rishabhkhanna on 20/10/17.
 */
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
let allSockets = [];
let first = 0;
let lastPlayed = 0;
let lastPosition = 0;
app.use(express.static(path.join(__dirname, "public")));
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname, "/public/player.html"))
});

app.get('/start',(req,res)=>{
    res.sendFile(path.join(__dirname, "/public/playButton.html"))
})

io.on('connect',(socket)=>{
   console.log("Socket connected " + socket.id);
   allSockets.push(socket.id);

    socket.on('random',()=>{
       console.log("Random Clicked" + allSockets.indexOf(socket.id));
       console.log("Socket ID : " + socket.id);
       if(allSockets.indexOf(socket.id) !== -1){
           console.log("remove index" + socket.id);
           let index = allSockets.indexOf(socket.id);
           allSockets.splice(index,1);
       }
        let randomIndex = Math.floor(Math.random() * allSockets.length);
       let id = allSockets[randomIndex];
       console.log("id: " + id);
       console.log("all " + allSockets);
       first = 1;
       if(first !== 0 && lastPlayed !== 0 ){
           io.to(lastPlayed).emit('getPosition',(function (data) {
               lastPosition = data;
           }))
       }
        lastPlayed = id;
       io.to(id).emit('play',`{position : ${lastPosition} }`);
    });

    socket.on('together',()=>{
        // if(allSockets[socket.id] !== null){
        //     allSockets[socket.id] = null;
        // }
        socket.broadcast.emit('play','play');
    });

    socket.on('stop', ()=>{
        console.log(allSockets);
        socket.broadcast.emit('stop','stop');
    })

    socket.on('disconnect',()=>{
        console.log("Disconected");
        let index = allSockets.indexOf(socket.id);
        allSockets.splice(index,1);
        console.log(allSockets);
    })

});

http.listen('9999',()=>{
    console.log("Rishabh Khanna")
});

