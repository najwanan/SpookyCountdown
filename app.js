const txtDays = document.querySelector('#days')
const txtHours = document.querySelector('#hours')
const txtMinutes = document.querySelector('#minutes')
const txtSeconds = document.querySelector('#seconds')

var Halloween = new Date("October 31, 2021 12:00:00").getTime();

var timer = setInterval(function(){

  let now = new Date().getTime();
  let t = Halloween - now;

  if(t >= 0){
    let days = Math.floor(t/(1000*60*60*24));  
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) /(1000 * 60));
    let seconds = Math.floor((t % (1000 *60))/1000);

    txtDays.innerHTML = days;
    txtHours.innerHTML = ("0" + hours).slice(-2);
    txtMinutes.innerHTML = ("0" + minutes).slice(-2);
    txtSeconds.innerHTML = ("0" + seconds).slice(-2);
  } else {
      document.getElementById("clock").innerHTML = "It's Halloween!"
  }
  
  
}, 1000);

