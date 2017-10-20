/**
 * Created by rishabhkhanna on 20/10/17.
 */
$(function () {
    let socket = io("http://localhost:9999/");
    let sound = new Howl({
        src: ['./come_together.mp3']
    });
    sound.play();
});
