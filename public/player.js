/**
 * Created by rishabhkhanna on 20/10/17.
 */
$(function () {
    let socket = io("http://192.168.1.39:9999/");
    let sound = new Howl({
        src: ['./rave_digger.mp3']
    });

    socket.on('play', function (data) {
        console.log(data);
        sound.play();
    })

    socket.on('stop', function (data) {
        console.log(data);
        sound.pause();
    })

    socket.on('get', function (data) {



        socket.emit('position', {position: sound.seek()});
        sound.pause();
    })

    socket.on('seek', function (data) {

        console.log(data);

            // sound.pos(data.position,sound.play());
            // sound.play()

        // sound.play(function (id) {
        //     sound.seek(data.position,id)
        // });
        sound.seek(data.position,sound.play());
        // console.log(sound.seek());

    })

});
