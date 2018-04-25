var table = document.querySelector("table");
var div = document.querySelector("div");
table.onclick = event => {
  console.log(event.target);
  if (event.target.id == "table") {
    div.innerHTML = "table";
  } else if (event.target.id == "tb") {
    div.innerHTML = "tableBody";
  } else {
    div.innerHTML = event.target.outerHTML;
  }
};
