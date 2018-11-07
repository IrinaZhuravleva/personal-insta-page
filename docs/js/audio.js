$(document).ready(function(){

	var audio = $('#audioTrack')[0];
	console.log(audio);

	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');

	// селектор по атрибутам
	$audioControl = $('[data-type="audio-control"]');

// не играет
	// audio.play();
	
	initAudioPlayer();


	function initAudioPlayer(){
		$playBtn.parent().show();
		audio.loop = true;

		$audioControl.click(function(){
			if (audio.paused) {
				audio.play();
				$playBtn.parent().hide();
				$pauseBtn.parent().show();
				console.log('playing');
			} else {
				audio.pause();
				$playBtn.parent().show();
				$pauseBtn.parent().hide();
				console.log('paused');
			}



			// console.log('audio control click');

		});


	}
});
