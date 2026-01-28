const progress  = document.getElementById("progress")
const song  = document.getElementById("song")
const ctrlIcon  = document.getElementById("ctrlIcon")
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
   if(ctrlIcon.classList.contains("ri-play-large-fill")){
    song.play();
    ctrlIcon.classList.remove("ri-play-large-fill");
    ctrlIcon.classList.add("ri-pause-large-fill"); 
    
   }else{
    song.pause();
    ctrlIcon.classList.add("ri-play-large-fill");
    ctrlIcon.classList.remove("ri-pause-large-fill"); 
   }

}
   if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
        
    }, 500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
     ctrlIcon.classList.add("ri-play-large-fill");
    ctrlIcon.classList.remove("ri-pause-large-fill"); 
}