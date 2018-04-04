var repeat = 0; /* количество повторов*/
function init(i, k, int) {
  /* k количество повторов, int - интервал*/
  var background = "";
  if (i == 0) {
    background = "red";
  } else if (i == 1) {
    background = "yellow";
  } else if (i == 2) {
    background = "green";
  } else {
    i = 0;
    background = "red";
  }
  var elements = document.querySelector(".wrapper").children;
  console.log(elements);
  console.log(k * elements.length);
  console.log(repeat);
  for (var j = 0; j < elements.length; j++) {
    elements[j].style.background = "#000";
  }
  elements[i].style.background = background;

  if (i == 1) {
    var yellow = setInterval(function() {
      console.log("yellow " + i);
      elements[1].style.background = background;
    }, int / 6);
    var yellow_fin = setInterval(function() {
      console.log("yallow fin ");
      elements[1].style.background = "#000";
    }, int / 12 - 1);
    setTimeout(function() {
      clearInterval(yellow);
    }, int);
    setTimeout(function() {
      clearInterval(yellow_fin);
    }, int);
  }
  setTimeout(function() {
    if (repeat < k * elements.length - 1) {
      repeat++;
      i++;
      init(i, k, int);
    } else {
      elements[i].style.background = "#000";
    }
  }, int);

  // var qw = setInterval(function() {
  //   if (repeat < k * elements.length - 1) {
  //         repeat++;
  //         i++;
  //         init(i, k, int);
  //       } else {
  //         elements[i].style.background = "#000";
  //       }
  // }, int );
  // setTimeout(function() {
  //   clearInterval(qw);
  // }, int*k*elements.length);
}
init(0, 3, 2000);
