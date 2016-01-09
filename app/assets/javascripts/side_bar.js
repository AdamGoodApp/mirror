$( document ).ready(function() {
  function lightsOff() {
    $.ajax({
      method: "GET",
      url: "/lights-off"
    }).done(function( msg ) {

    });
  }

  function lightsOn() {
    $.ajax({
      method: "GET",
      url: "/lights-on"
    }).done(function( msg ) {

    });
  }

  $( ".light" ).on( "click", function(e) {
    var status = $('.light-text').html();

    if (status == "" || status == "off") {
      $('.light-text').html('on');
      lightsOff();
    } else {
      $('.light-text').html('off');
      lightsOn();
    }
  });


  //FAN CONTROL
  function fanOff() {
    $.ajax({
      method: "GET",
      url: "/fan-off"
    }).done(function( msg ) {

    });
  }

  function fanOn() {
    $.ajax({
      method: "GET",
      url: "/fan-on"
    }).done(function( msg ) {

    });
  }

  $( "#fan" ).on( "click", function(e) {
    var status = $('.fan-text').html();

    if (status == "" || status == "off") {
      $('.fan-text').html('on');
      $('.fan-img').removeClass('rotate');
      fanOff();
    } else {
      $('.fan-text').html('off');
      $('.fan-img').addClass('rotate');
      fanOn();
    }
  });


});