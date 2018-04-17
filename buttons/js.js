var add = document.querySelector(".add");
var ul = document.querySelector("ul");
var li = document.createElement("li");

add.onclick = function () {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var li = document.createElement("li");
  li.innerHTML += `${h}:${m}:${s}`;
  ul.appendChild(li);
  console.log(add, h, m, s, parent);
  li.addEventListener("click", function () {
    // this.classList.add("hide");
   ul.removeChild(this)})

};

var prev = document.querySelector(".prev");
prev.onclick = function () {
  var chil = ul.children;
  var count = +document.querySelector("h1").innerHTML;
  if (count > 0) {
    chil[count].classList.remove("yellow");
    chil[count - 1].classList.add("yellow");
    document.querySelector("h1").innerHTML =
      +document.querySelector("h1").innerHTML - 1;
  }
  console.log(chil, count);
};

var next = document.querySelector(".next");
next.onclick = function () {
  var chil = ul.children;
  var count = +document.querySelector("h1").innerHTML;
  if (count < 0) {
    chil[count + 1].classList.add("yellow");
    document.querySelector("h1").innerHTML =
      +document.querySelector("h1").innerHTML + 1;
  } else if (count < chil.length - 1) {
    chil[count].classList.remove("yellow");
    chil[count + 1].classList.add("yellow");
    document.querySelector("h1").innerHTML =
      +document.querySelector("h1").innerHTML + 1;
  }

  console.log(chil, count);
};

var del = document.querySelector(".del");
del.onclick = function () {
  var chil = ul.children;
  // var element = document.querySelectorAll("li");
  var len = Math.ceil(Math.random() * (chil.length - 1));
  var element = chil[len];
  ul.removeChild(element);
};


var hide = document.querySelector("ul");
hide.addEventListener("click", function () {
  // this.classList.add("hide");
 ul.removeChild(this);
});

// add.onclick = timeButton();
// function timeButton(parent) {
//   var d = new Date();
//   var h = d.getHours();
//   var m = d.getMinutes();
//   var s = d.getSeconds();
//   var li = document.createElement("li");
//   li.innerHTML += `${h}:${m}:${s}`;
//   parent.appendChild(li);
//   console.log(add, h, m, s,parent);
// };
