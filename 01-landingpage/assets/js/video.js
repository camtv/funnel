import Player from '@vimeo/player'
import $ from 'jquery'

var player = null;
$(document).ready(function() {
    var iframe = document.querySelector('iframe');
    player = new Player("video_vimeo");
});

function VideoRestart() {

    player.setCurrentTime(0).then(function (seconds) {
        // `seconds` indicates the actual time that the player seeks to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // The time is less than 0 or greater than the video's duration
                break;

            default:
                // Some other error occurred
                break;
        }
    });
    player.setVolume(0.5).then(function (volume) {
        // The volume is set
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // The volume is less than 0 or greater than 1
                break;

            default:
                // Some other error occurred
                break;
        }
    });
}

export default VideoRestart;
window.VideoRestart = VideoRestart;


