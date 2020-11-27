//Countdown
    // The data/time we want to countdown to
    var countDownDate = new Date("Nov 25, 2020 19:30:00").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + " dia "
    document.getElementById("hours").innerHTML = hours + " h " 
    document.getElementById("mins").innerHTML = minutes + " min " 
    document.getElementById("secs").innerHTML = seconds + " seg " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "0 dias"
        document.getElementById("hours").innerHTML = "0 h" 
        document.getElementById("mins").innerHTML = "0 min"
        document.getElementById("secs").innerHTML = "0 seg"
        document.getElementById("end").innerHTML = "JÁ ESTÁ NO AR!!";
    }
    }, 1000);

// ---------- Modal ------------
let count = 0
document.addEventListener("mouseleave", function(){
  
  if (count < 3 ) {
    document.getElementById("modalSair").className = 'show';
    count += 1;
    console.log(count);
  }
  
})

function closeMsg(){
  document.getElementById('modalSair').className = 'modal fade';
}

function assistirLive(){
  document.getElementById('modalSair').className = 'modal fade';
  window.location.href='live.html';
}