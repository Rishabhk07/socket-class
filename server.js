/**
 * Created by rishabhkhanna on 20/10/17.
 */
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
let allSockets = [];
io.on('connection',(socket)=>{
    console.log("Connection created");
    allSockets.push(socket.id);
});

app.use(express.static(path.join(__dirname,'public')));
app.get('/button',(req,res) =>{
    res.sendFile(path.join(__dirname, '/public/playButton.html'));
});
app.get('/player',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/player.html'));
});

server.listen('9889',()=>{
    console.log("Magic Started")    
})