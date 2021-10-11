var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    

}
recognition.onresult=function (event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
}

function speak(){
var synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").innerHTML;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach("#cam");
}

var camera=document.getElementById("cam");
Webcam.set({
    width:360,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});