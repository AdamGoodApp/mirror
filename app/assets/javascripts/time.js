$( document ).ready(function() {
  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  setInterval(function() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var date = ordinal_suffix_of(currentTime.getDate()) + " " + monthNames[currentTime.getMonth()] + " " + currentTime.getFullYear();

    if (minutes < 10){
      minutes = "0" + minutes
    }
    var t_str = date + ", " + hours + ":" + minutes + ":" + seconds;
    if(hours > 11){
      t_str += " PM";
    } else {
      t_str += " AM";
    }

    $('.time').html(t_str);
  }, 1000);
});