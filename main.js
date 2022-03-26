var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function begin(){
   document.getElementById("textbox").innerHTML="";
  recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    talk();
}
function talk()
{
  var synth = window.speechSynthesis;
  var speakdata = document.getElementById("textbox").value ;
  var utterthis=new SpeechSynthesisUtterance( speakdata);
  synth.speak(utterthis);
  Webcam.attach("#cam");
}
Webcam.set({
  width:360,
  height:250,
  image_format:"png",
  png_quality:100
});
var camera =document.getElementById("cam");