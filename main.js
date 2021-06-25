var speechrec=window.webkitSpeechRecognition;
var recognition=new speechrec();
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if (content=="take my selfie"){
        console.log("takingselfie");
        speak()
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").innerHTML;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera)
    setTimeout(function()
    {
        takeselfie();
        save()
    },5000)
}
camera=document.getElementById("camera")
Webcam.set({
    width:400,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
})
function takeselfie(){
    Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="selfieimg" src="'+data_uri+'">';

})
}
function save(){
    link=document.getElementById("link")
    img=document.getElementById("selfieimg").src;
link.href=img
link.click()
}