function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//get random integer function
var loserMessages = ['Who are you Yoko? Get those Beatles TOGETHER!', 'You\'re a loooooooser! Try again!', 'Did someone smack you with Maxwell\'s Silver Hammer? Try again!', 'Don\'t you dare let it be! Try again!', 'Yesterday, all your troubles seemed so far away. Try again!'];
var difficulty = 60;

document.getElementById('easy').onclick = function () {
  console.log("Diff is EASY");
  difficulty = 80;
    document.getElementById('easy').style.color = "green";
    document.getElementById('med').style.color = "black";
    document.getElementById('hard').style.color = "black";
    console.log(difficulty);
  }

document.getElementById('med').onclick = function () {
  console.log("Diff is medium");
  difficulty = 60;
  document.getElementById('med').style.color = "green";
  document.getElementById('easy').style.color = "black";
  document.getElementById('hard').style.color = "black";
  console.log(difficulty);
  }

document.getElementById('hard').onclick = function () {
  console.log("Diff is hard");
  difficulty = 30;
  document.getElementById('hard').style.color = "green"
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
    var johnValue = getRandomInt(0,200);
    var paulValue = getRandomInt(0,200);
    var georgeValue = getRandomInt(0,200);
    var ringoValue = getRandomInt(0,200);
//assigns x,y values to the beatles

    var johnimg = new Image();
    johnimg.onload = function() {
    ctx.drawImage(johnimg, 60, johnValue);
    }
    johnimg.src = "beatles/john.svg";
    var paulimg = new Image();
// loads John

    paulimg.onload = function() {
    ctx.drawImage(paulimg, 160, paulValue);
    }
    paulimg.src = "beatles/paul.svg";
//loads paul

    var georgeimg = new Image();
    georgeimg.onload = function() {
    ctx.drawImage(georgeimg, 260, georgeValue);
    }
    georgeimg.src = "beatles/george.svg";
//loads george

    var ringoimg = new Image();
    ringoimg.onload = function() {
    ctx.drawImage(ringoimg, 360, ringoValue);
    }
    ringoimg.src = "beatles/ringo.svg";
//loads ringo

    var beatlesMax = Math.max(johnValue, paulValue, georgeValue, ringoValue);
    var beatlesMin = Math.min(johnValue, paulValue, georgeValue, ringoValue);
//calculate the max/min beatles y for each round

    if (beatlesMax-beatlesMin<difficulty)
    {
      ctx.fillStyle = '#BADA55';
      ctx.fillRect(40,0,420,350);
      var appleimg = new Image();
      appleimg.onload = function() {
      ctx.drawImage(appleimg, 400 , 250);
      }
      appleimg.src = "http://i.imgur.com/B6xUcOa.png";

      document.getElementById('message').style.color = "#9eb848";
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
