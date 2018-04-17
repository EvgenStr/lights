var but = document.querySelector("button");

but.addEventListener("click", function() {
  var text = document.getElementsByTagName("input")[0];
  var val = text.value;
  if (val && val) {
    document.querySelector(".text").innerHTML += val + "<br>";
  }
});
