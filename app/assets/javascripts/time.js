var months = [
  "JAN", "FED", "MAR", "APR",
  "MAY", "JUN", "JUL", "AUG",
  "SEPT", "OCT", "NOV", "DEC"
];

(function() {
  var getTime = function() {
    var now = new Date();
    return {
      seconds: ('0' + now.getSeconds()).slice(-2),
      minutes: ('0' + now.getMinutes()).slice(-2),
      hours: now.getHours(),
      day: now.getDate(),
      month: now.getMonth(),
      year: now.getFullYear()
    };
  }
  var updateTime = function(time) {
    var hourBar = document.getElementById("hour");
    var hourRatio = (time.hours / 24);
    var minutesBar = document.getElementById("minutes");
    var minutesRatio = (time.minutes / 60);
    var secondsBar = document.getElementById("seconds");
    var secondsRatio = (time.seconds / 60);
    document.getElementById("date").innerHTML =
        months[time.month] + " " +
        time.day + ", " + time.year +
        " " + time.hours + ":" +
        time.minutes + ":" + time.seconds;
    hourBar.style.width = hourRatio * 100 + "%";
    //hourBar.style.backgroundColor = "hsl(" + ((1 - hourRatio) * 100) + ",50%,50%)";
    hourBar.style.backgroundColor = "#fff";
    minutesBar.style.width = minutesRatio * 100 + "%";
    //minutesBar.style.backgroundColor = "hsl(" + ((1 - minutesRatio) * 100) + ",50%,50%)";
    minutesBar.style.backgroundColor = "#fff";
    secondsBar.style.width = secondsRatio * 100 + "%";
    //secondsBar.style.backgroundColor = "hsl(" + ((1 - secondsRatio) * 100) + ",50%,50%)";
    secondsBar.style.backgroundColor = "#fff";
  }

  setInterval(function() {
    return updateTime(getTime());
  }, 1000);
})();