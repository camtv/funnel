var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

function restart() {

player.setCurrentTime(0).then(function(seconds) {
  // `seconds` indicates the actual time that the player seeks to
}).catch(function(error) {
  switch (error.name) {
	case 'RangeError':
		// The time is less than 0 or greater than the video's duration
		break;

	default:
		// Some other error occurred
		break;
  }
});
  player.setVolume(0.5).then(function(volume) {
  // The volume is set
}).catch(function(error) {
  switch (error.name) {
	case 'RangeError':
		// The volume is less than 0 or greater than 1
		break;

	default:
		// Some other error occurred
		break;
  }
});

var element = document.getElementById("btn-overlay");
element.classList.add("cela");
}	