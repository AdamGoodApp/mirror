$( document ).ready(function() {
  function speakName() {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[48];
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 0.9; // 0.1 to 10
    msg.pitch = 0; //0 to 2
    msg.text = "welcome, " + gon.user['name'];
    msg.lang = 'en-US';

    //msg.onend = function(e) {
    //  console.log('Finished in ' + event.elapsedTime + ' seconds.');
    //};

    speechSynthesis.speak(msg);
  }

  if(gon.user) {
    setTimeout(function(){ speakName(); }, 3000);
  }
});