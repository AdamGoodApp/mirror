$( document ).ready(function() {

  function get_weather() {
    $.ajax({
      method: "GET",
      url: "/weather"
    }).done(function( msg ) {
      update_content(msg)
    });
  }

  function update_content(weather) {
    var skycons = new Skycons({"color": "white"});
    skycons.add("icon1", weather['current']['icon']);
    skycons.play();
    $('.temperature').html(weather['current']['temperature']);
  }

  get_weather();
  setInterval(function(){ get_weather(); }, 3600000);

});