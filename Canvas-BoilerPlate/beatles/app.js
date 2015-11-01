function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//get random integer function

window.onload = function() {


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
    johnimg.src = "http://i.imgur.com/RsnqEqE.png";
    var paulimg = new Image();
// loads John

    paulimg.onload = function() {
    ctx.drawImage(paulimg, 160, paulValue);
    }
    paulimg.src = "http://i.imgur.com/SJ8lGKd.png";
//loads paul

    var georgeimg = new Image();
    georgeimg.onload = function() {
    ctx.drawImage(georgeimg, 260, georgeValue);
    }
    georgeimg.src = "http://i.imgur.com/fclxApe.png";
//loads george

    var ringoimg = new Image();
    ringoimg.onload = function() {
    ctx.drawImage(ringoimg, 360, ringoValue);
    }
    ringoimg.src = "http://i.imgur.com/K5SVUrZ.png";
//loads ringo

var beatlesMax = Math.max(johnValue, paulValue, georgeValue, ringoValue);
var beatlesMin = Math.min(johnValue, paulValue, georgeValue, ringoValue);
//calculate the max/min beatles y for each round

if (beatlesMax-beatlesMin<50)
  {
  ctx.fillStyle = '#BADA55';
  ctx.fillRect(40,0,420,350);
  var appleimg = new Image();
  appleimg.onload = function() {
  ctx.drawImage(appleimg, 400 , 250);
  }
  appleimg.src = "http://i.imgur.com/B6xUcOa.png";
  };
  console.log('you win!');
}
//loads the logo if the Beatles are in a row

//the end