// fuction
function moveRandom(element) {
  // debugger;
  element.style.left = Math.random() * (window.innerWidth - 50) + "px";
  element.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

function moveDiscret(element, x, y) {
  var { left, top } = element.style;
  if (left || top) {
    element.style.left = parseInt(left) + x + "px";
    element.style.top = parseInt(top) + y + "px";
  } else {
    element.style.left = x + "px";
    element.style.top = y + "px";
  }
}
// global var`s
var counter = 0;
var main = document.getElementById("main");
var circle = document.createElement("div");
var diraction = {
  left: 0,
  top: 0,
  rigth: 0,
  bottom: 0
};
var score = document.createElement("h1");

// var score = +document.getElementById("main").innerHTML;
// init
circle.className = "circle animation";
document.body.appendChild(circle);
// document.body.querySelector(".circle").innerHTML+="<h1>0</h1>";
document.body.querySelector(".circle").appendChild(score);
document.body.querySelector("h1").innerHTML += "0";
// var scoreCount = +document.querySelector("h1").innerHTML;
// set diraction
window.addEventListener("keydown", function(event) {
  if (event.keyCode == 87) {
    diraction.top = 1;
  } else if (event.keyCode == 65) {
    diraction.left = 1;
  } else if (event.keyCode == 83) {
    diraction.bottom = 1;
  } else if (event.keyCode == 68) {
    diraction.rigth = 1;
  }
});

// reset diraction
window.addEventListener("keyup", function(event) {
  if (event.keyCode == 87) {
    diraction.top = 0;
  } else if (event.keyCode == 65) {
    diraction.left = 0;
  } else if (event.keyCode == 83) {
    diraction.bottom = 0;
  } else if (event.keyCode == 68) {
    diraction.rigth = 0;
  }
});
var t = 0;
// game cycle
setInterval(function() {
  if (counter < 50) {
    counter++;
  } else {
    counter = 0;
    moveRandom(circle);
  }

  var left = (diraction.rigth - diraction.left) * 10;
  var right = (diraction.bottom - diraction.top) * 10;
  if (
    parseInt(circle.style.top) > parseInt(main.style.top) &&
    parseInt(circle.style.top) < parseInt(main.style.top) + 100 &&
    parseInt(circle.style.left) > parseInt(main.style.left) &&
    parseInt(circle.style.left) < parseInt(main.style.left) + 100
  ) {
    var scoreCount = +document.querySelector("h1").innerHTML;
    // scoreCount++;
    document.querySelector("h1").innerHTML =
      +document.querySelector("h1").innerHTML + 1;
    document.querySelector("#main").style.width = 150 - scoreCount * 10 + "px";
    document.querySelector("#main").style.height = 150 - scoreCount * 10 + "px";
    circle.style.left = "";
    circle.style.right = "";
    // debugger; 
    moveRandom(circle);
    // debugger;
    if (scoreCount > 5) {
      document.location.reload();
    }
  }

  moveDiscret(main, left, right);
}, 20);
