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
    skycons.add("icon2", weather['tomorrow']['icon']);
    skycons.add("icon3", weather['after_tomorrow']['icon']);
    skycons.play();

    $('.temperature').html(parseInt(weather['current']['temperature']) + "&deg;");
    $('.tomorrow .temperature').html(parseInt(weather['tomorrow']['temperature']) + "&deg;");
    $('.tomorrow .day').html(weather['tomorrow']['day']);
    $('.after_tomorrow .temperature').html(parseInt(weather['after_tomorrow']['temperature']) + "&deg;");
    $('.after_tomorrow .day').html(weather['after_tomorrow']['day']);
  }

  get_weather();
  setInterval(function(){ get_weather(); }, 3600000);

});