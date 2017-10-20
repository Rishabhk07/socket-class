/**
 * Created by rishabhkhanna on 20/10/17.
 */
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req,res) =>{

});

app.listen('9889',()=>{
    console.log("Magic Started")    
})