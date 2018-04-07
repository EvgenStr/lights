function tableGenerator(horizontal, vertical) {
  if (horizontal - 1 != horizontal - 1 || vertical - 1 != vertical - 1) {
    console.log("Error");
  } else {
    document.body.innerHTML += "<table></table>";
    document.body.querySelector("table").innerHTML += "<tbody></tbody>";
    var c = document.body.children[0];
    var g = c.children[0];
    for (var i = 0; i < horizontal; i++) {
      document.body.querySelector("tbody").innerHTML += "<tr></tr>";
      for (var j = 0; j < vertical; j++) {
        g.children[i].innerHTML += "<td></td>";
      }
    }
  }
}
function randomColor() {
  var tabl = document.body.children[0].children[0].children;
  //   var td = tabl[0].children;
  console.log(tabl);
//   console.log(td);
  for (var u = 0; u < tabl.length; u++) {
    for (var k = 0; k < tabl[u].children.length; k++) {
      var rand = Math.ceil(Math.random() * 4);

      if (rand == 1) {
        tabl[u].children[k].classList.add("red");
      } else if (rand == 2) {
        tabl[u].children[k].classList.add("green");
      } else if (rand == 3) {
        tabl[u].children[k].classList.add("yellow");
      } else {
        tabl[u].children[k].innerHTML += `${Math.ceil(Math.random() * 100)}`;
      }

      // debugger;
    }
  }
}

function CountColor() {
  var tabl = document.body.children[0].children[0].children;
  var r = 0,
    y = 0,
    g = 0,
    count = 0;
  for (var u = 0; u < tabl.length; u++) {
    for (var k = 0; k < tabl[u].children.length; k++) {
      if (tabl[u].children[k].classList.contains("red")) {
        r++;
      }
      if (tabl[u].children[k].classList.contains("green")) {
        g++;
      }
      if (tabl[u].children[k].classList.contains("yellow")) {
        y++;
      }
      count++;
    }
  }
  document.body.innerHTML += `<div> Количество ячеек = ${count},red=${r},green=${g},yellow=${y}, white${count-r-g-y} <br> 
  процент красных ${r/count*100}, процент зеленых ${g/count*100}, процент желтых ${y/count*100}</div>`;
}

tableGenerator(3, 5);
randomColor();
CountColor();