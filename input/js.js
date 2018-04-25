var but = document.querySelector("button");

but.addEventListener("click", function() {
  var text = document.getElementsByTagName("input")[0];
  var val = text.value;
  if (val && val) {
    document.querySelector(".text").innerHTML += val + "<br>";
  }
});


var ul = document.createElement("ul");
document.body.appendChild(ul);
var arr = [];
var len = 10+(Math.random()*100);
for(var i = 0;i<len;i++){
    arr[i]=Math.random().toString(36).substr(2, 5);
    ul.innerHTML+=`<li> ${arr[i]} </li>`;
}


var input = document.querySelector("input");

function check(curentText, targetText, element){
    return curentText.includes(targetText) ? "block" : "none";
}
input.addEventListener("input", function(){
    var arrayLi = ul.children;
    for(var i = 0; i < arrayLi.length; i++){
        var element = arrayLi[i];
        var targetText = this.value;
        var curentText = element.innerHTML;

        if (targetText.length > curentText.length){
            element.style.display = check(curentText, targetText, element);
        } else {
            element.style.display = check(curentText, targetText, element);
        }
    }
    
});

