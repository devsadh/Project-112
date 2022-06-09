Webcam.set({
    width:350,
    height:300,
    image_quality:90,
    image_format:"png"
})

camera = document.getElementById("camera")
Webcam.attach("#camera")



function takesnapshot(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML = '<img id="pic" src="'+pic+'"/>'
    })
}

function modelLoaded(){
    console.log("Model Loaded")
}

console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hqRXxUhx6/model.json",modelLoaded)





function gotResult(error,results){
   
   
    if(error){
       console.error(error)
   }else{
       console.log(results)
       document.getElementById("result_emotion_name").innerHTML = results[0].label
       predict = results[0].label
       speak()

       if (results[0].label == "peace"){
           document.getElementById("emoji").innerHTML =" &#128522"
       }else if(results[0].label == "ok"){
        document.getElementById("emoji").innerHTML =" &#128532"
       }else if(results[0].label == "good"){
        document.getElementById("emoji").innerHTML =" &#128545"
       }else if(results[0].label == "good luck"){
        document.getElementById("emoji").innerHTML =" &#129300"
       }else if(results[0].label == "call me"){
        document.getElementById("emoji").innerHTML =" &#129300"
       }else if(results[0].label == "dislike"){
        document.getElementById("emoji").innerHTML =" &#129300"
          }else if(results[0].label == "rock"){
            document.getElementById("emoji").innerHTML =" &#129300"
          }
        }
    }

function check(){
    img = document.getElementById("pic")
    classifier.classify(img , gotResult)
       }


//function speak(){
    
    
    //var Utterthis = SpeechSynthesisUtterance(sd1)
   // window.speechSynthesis.speak(Utterthis)
//}

