var container = document.querySelector('.container');
var video = document.querySelector('.back video');
var choices = document.querySelector('.choices');
var contBtn = document.querySelector('#continue-btn');
var skipBtn = document.querySelector('#skip-btn');

var shownChoice1 = false;

container.addEventListener('click', function(){

  if(!container.classList.contains('anim'))
  {
    console.log("flip!");
    container.classList.add('anim');
    video.play();
  }
});


video.addEventListener('timeupdate', function(){

  if(video.currentTime > 3 && !shownChoice1){
    shownChoice1 = true;
    video.pause();
    choices.style.visibility = "visible";
  }
});

contBtn.addEventListener('click', function(){
  video.play();
  choices.style.visibility = "hidden";
  console.log(shownChoice1);
});

skipBtn.addEventListener('click', function(){
  video.currentTime = 40;
  video.play();
  choices.style.visibility = "hidden";
});


video.addEventListener('ended', function(){
  container.classList.remove('anim');
  shownChoice1 = false;
})
