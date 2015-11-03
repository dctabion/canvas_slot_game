function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//get random integer function
var loserMessages = ['ledzep1', 'ledzep2', 'ledzep3'];
var difficulty = 60;

document.getElementById('easy').onclick = function () {
  console.log("Diff is EASY");
  difficulty = 80;
    document.getElementById('easy').style.color = "#ffb951";
    document.getElementById('med').style.color = "black";
    document.getElementById('hard').style.color = "black";
    console.log(difficulty);
  }

document.getElementById('med').onclick = function () {
  console.log("Diff is medium");
  difficulty = 60;
  document.getElementById('med').style.color = "#ffb951";
  document.getElementById('easy').style.color = "black";
  document.getElementById('hard').style.color = "black";
  console.log(difficulty);
  }

document.getElementById('hard').onclick = function () {
  console.log("Diff is hard");
  difficulty = 30;
  document.getElementById('hard').style.color = "#ffb951"
  document.getElementById('easy').style.color = "black";
  document.getElementById('med').style.color = "black";
    console.log(difficulty);
    }


var runCanvas = function() {
    /*var difficulty =
    if (document.getElementById('easy').style.color = "green") {
      return
    }*/

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

//loads the canvas
    var paigeValue = getRandomInt(0,200);
    var plantValue = getRandomInt(0,200);
    var jpjValue = getRandomInt(0,200);
    var bonzoValue = getRandomInt(0,200);
//assigns x,y values to the beatles

    var paigeimg = new Image();
    paigeimg.onload = function() {
    ctx.drawImage(paigeimg, 60, paigeValue);
    }
    paigeimg.src = "ledzep/paige.svg";
// loads paige symbol

    var jpjimg = new Image();
    jpjimg.onload = function() {
    ctx.drawImage(jpjimg, 160, jpjValue);
    }
    jpjimg.src = "ledzep/jpj.svg";
//loads jpj symbol

    var bonzoimg = new Image();
    bonzoimg.onload = function() {
    ctx.drawImage(bonzoimg, 260, bonzoValue);
    }
    bonzoimg.src = "ledzep/bonzo.svg";
//loads bonzo

    var plantimg = new Image();
    plantimg.onload = function() {
    ctx.drawImage(plantimg, 360, plantValue);
    }
    plantimg.src = "ledzep/plant.svg";
//loads plant

    var ledzepMax = Math.max(paigeValue, jpjValue, bonzoValue, plantValue);
    var ledzepMin = Math.min(paigeValue, jpjValue, bonzoValue, plantValue);
//calculate the max/min beatles y for each round

    if (ledzepMax-ledzepMin<difficulty)
    {
      ctx.fillStyle = '#ffb951';
      ctx.fillRect(40,0,420,350);
      var lzlogoimg = new Image();
      lzlogoimg.onload = function() {
      ctx.drawImage(lzlogoimg, 400 , 250);
      }
      lzlogoimg.src = "http://i.imgur.com/B6xUcOa.png";

      document.getElementById('message').style.color = "#ffb951";
      document.getElementById('message').innerHTML = "ZOMG YOU WON!!! Play again?";

    } else {
      document.getElementById('message').style.color = "black";
      document.getElementById('message').innerHTML = loserMessages[getRandomInt(0,loserMessages.length)];
      }
  ;
  }





  document.getElementById('button').onclick = function () {
  console.log('button is working')
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  runCanvas();
  console.log(difficulty);
  }
//loads the logo if the Beatles are in a row

//the end
