/**
 * Chatbot de cleverbotIO com artyom pra speechSynthesis e SpeechRecognition e um p5 por cima pra ficar bacana.
 * Danilo Fragoso 01/2017
*/

var canvas;
/*Chave e bot da cleverbotIO, gerei um bot pra mim mas ele tava meio burro :/ */
//var bot = new cleverbot("u8npzeT3iAfLFKhb", "lbuYWZUqfDy222khV7uxlFISiQz8gXMB");
var bot = new cleverbot('u9oWaJkNnostVcVA','NzsCn9PrdHh4q7VWQSQK2ojphvtq7ZxV');
bot.setNick("Mia");

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

var resp = "ops";

function speak(text){
  artyom.say(text,{
    onStart: function(){
        console.log("Start");
    },
    onEnd: function(){
        console.log("End");
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
}

function draw(){
  background(150);

  textSize(15);
  text("you said:",10,10);

  textSize(32);
  text(finalCom, 15, 35);

  textSize(15);
  text("she said:",10,60);

  textSize(32);
  text(resp, 10, 85);

  textSize(15);
  text("Danilo Fragoso 2017", width - 150, height - 15);

}
