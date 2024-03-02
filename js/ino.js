const video = document.getElementById('muViedoe');
const btnPause = document.getElementById('pause');
const btnMute = document.getElementById('mute');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const playlist = [`pol`,`pou`,`poy`]
const playname = [`pol`,`pou`,`poy`]
const playtext = [`01`,`02`,`03`]
const videoTitle = document.querySelector('video__title')
const videoText = document.querySelector('video__text')

let number = 0;

function play () {
   // console.log('test')
   if (video.paused) {
    video.play()
    btnPause.innerHTML = 'PAUSE' ;
   } else{
    video.pause();
    btnPause.innerHTML = 'PLAY';
   }
}

function mute() {
    if (video.muted ){
        video.muted = false;
        btnMute.innerHTML = 'OFF';
    } else{
        video.muted = true;
        btnMute.innerHTML = 'ON';
    }
}
function prev() {
    if (number != 0){
        number --;
    } else{
        number = playlist.length -1;
    }

    video.src = `video/${playlist[number]}.mp4`;
    videoTitle.innerHTML = playname[number];
    videoText.innerHTML = playname[number];
}
function next() {
    if (number <= playlist.length -1 ){
        number ++;
    } else{
        number = 0;
    }
  video.src = `video/${playlist[number]}.mp4`;
  playlist.innerHTML
//   videoTitle.innerHTML = playname[number];
  videoText.innerHTML = playname[number];
}
