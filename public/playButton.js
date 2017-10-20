/**
 * Created by rishabhkhanna on 20/10/17.
 */
$(function () {
   let socket = io("http://localhost:9999");
   let random = $('#random');
   let together = $('#together');

   random.click(function (event) {
       console.log("random Clicked");
        socket.emit('random','Random play command send');
   })

    together.click(function (event) {
        console.log("together clicked");
        socket.emit('random','Random play command send');
    })

});