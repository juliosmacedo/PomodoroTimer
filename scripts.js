
// 25min Timer   miliseconds 1501000 //


// Update the count down every 1 second
function timer25Min() {
  let now2 = new Date().getTime();
  let countDownDate2 = now2 + 1501000
  document.getElementById('card').style.display = 'flex';
  document.getElementById('card').style.backgroundColor = 'white';
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("container").innerHTML = 
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    var mp3_url = 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3?filename=short-success-sound-glockenspiel-treasure-video-game-6346.mp3';
    (new Audio(mp3_url)).play()
    document.getElementById("container").innerHTML = "EXPIRED";
    alert('Your work time has expired. Go have a break!');
    timer5min();
  }
}, 0);}



const btnStart = document.getElementById('start')
btnStart.addEventListener("click", timer25Min);


// 5min Timer   miliseconds 302000 //

function timer5min() {
  let now3 = new Date().getTime();
  let countDownDate3 = now3 + 302000;
  document.getElementById('h3').style.display = 'block';
  document.getElementById('card').style.backgroundColor = '#71C7EC';
  var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate3 - now;
  console.log(distance)

  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("container").innerHTML = 
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    var mp3_url = 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3?filename=short-success-sound-glockenspiel-treasure-video-game-6346.mp3';
    (new Audio(mp3_url)).play()
    document.getElementById("container").innerHTML = "BREAK IS OVER";
    document.getElementById('h3').style.display = 'none';
    document.getElementById('card').style.backgroundColor = 'crimson';
    alert("Break is over. Let's get back to work!");
  }
}, 0);}