/**
 * Chatbot de cleverbotIO com artyom pra speechSynthesis e SpeechRecognition e um p5 por cima pra ficar bacana.
 * Danilo Fragoso 01/2017
*/

var canvas;
var responseToogle = false;
//novo bot :)
//var bot = new cleverbot('u9oWaJkNnostVcVA','NzsCn9PrdHh4q7VWQSQK2ojphvtq7ZxV');
var bot = new cleverbot("u8npzeT3iAfLFKhb", "lbuYWZUqfDy222khV7uxlFISiQz8gXMB");
bot.setNick("homepage");
//Voltei pra chave de api do site deles, pq a minha chave misteriosamente não responde a requisições longas.
//bot.setNick("Mia");

artyom.on([finalCom]).then(function(i){

    console.log("On");
    console.log(finalCom);
    speak(finalCom);
});

artyom.initialize({
    lang:"en-US",
    continuous:true,
    //debug:true,
    debug:false,
    listen:true,
});

var resp = "What is your name ?";

function speak(text){
  artyom.say(text,{
    onStart: function(){
        console.log("Start");
    },
    onEnd: function(){
        console.log("End");
        artyom.clearGarbageCollection();
        responseToogle = true;
    }
});
}

function answer(quest){
  bot.ask(quest, function (err, response) {
    console.log(response);
    resp = response;
    speak(response);
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
speak("Oh, hello. My name is Mia !");
speak("Now tell me, what is your name ?");
console.log("Greet");

}

function draw(){

var radius = random(250,275);
background(120);

  if (artyom.isSpeaking()){
    noStroke();
    fill(0,128,128);
    ellipse(width / 2, height / 2, radius,radius);
  }else{
    noStroke();
    fill(255,100,100);
    ellipse(width / 2, height / 2, 250,250);
  }

  fill(255);
  textSize(15);
  text("you said:",10,10);

  textSize(32);
  text(finalCom, 15, 35);

  textSize(15);
  text("she said:",10,60);

  textSize(32);
  if (responseToogle){
    text(resp, 10, 85);
  }

  textSize(15);
  text("Danilo Fragoso 2017", width - 145, 20);

}
