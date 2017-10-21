/**
 * Created by rishabhkhanna on 20/10/17.
 */
$(function () {
   let socket = io("https://live-socket-demo.herokuapp.com");
   let random = $('#random');
   let together = $('#together');
   let stop = $('#stop');

   random.click(function (event) {
       console.log("random Clicked");

        socket.emit('random','Random play command send');
   })

    together.click(function (event) {
        console.log("together clicked");
        socket.emit('together','Come Together play command send');
    })

    stop.click(function (event) {
        console.log("Music Stop")
        socket.emit('stop','stop music command');
    })

    socket.on('users',(data)=>{
        console.log("user count emit");
        $('.users').text(data.count + " users Connected");
    })

});