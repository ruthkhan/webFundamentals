function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    document.getElementById("hour").style.transform = "rotate(" + (time/120+180) + "deg)"
    document.getElementById("minutes").style.transform = "rotate(" + (time/10+180) + "deg)"
    document.getElementById("seconds").style.transform = "rotate(" + (time*6+180) + "deg)"
}, 1000);
