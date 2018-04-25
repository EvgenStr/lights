var childrenChoiseAge = document.getElementById("children");
var numderOfChildren = document.getElementById("people");
var orderButton = document.getElementById("form_order");

numderOfChildren.addEventListener("input", function(e) {
  var c_value = e.target.value;
  var div_children_num = document.querySelector(".numberChildren");
  var children = document.getElementById("children");
  if (c_value > 0) {
    // о4ищаем список
    if (div_children_num.children.length > 0) {
      var delete_ch = children.children;
      var len = delete_ch.length;
      for (var i = len - 1; i >= 0; i--) {
        children.removeChild(delete_ch[i]);
      }
    }
    // добавляем список детей
    for (var i = 0; i < c_value; i++) {
      children.innerHTML += `<option>${i}</option>`;
    }
  }
});

childrenChoiseAge.addEventListener("input", function(e) {
  var c_value = e.target.value;
  var div_children = document.querySelector(".age");
  var select_children = document.querySelector(".select_children");
  if (c_value) {
    div_children.style.display = "block";
    if (select_children.children.length > 0) {
      select_children.innerHTML = "";
      var delete_ch = select_children.children;
      var len = delete_ch.length;
      for (var i = len - 1; i >= 0; i--) {
        select_children.removeChild(delete_ch[i]);
      }
      // debugger;
    }
    select_children.innerHTML = ``;
    for (var i = 0; i < c_value; i++) {
      select_children.innerHTML += `ребенок ${i + 1} `;
      appendSelect(select_children);
    }
  } else {
    div_children.style.display = "none";
  }
});

function appendSelect(par) {
  var children_sel = document.createElement("select");
  par.appendChild(children_sel);
  for (var i = 1; i < 19; i++) {
    children_sel.innerHTML += `<option>${i}</option>`;
  }
}

var room_option = document.getElementById("room-option");
room_option.addEventListener("input", function(e) {
  var r_value = e.target.value;
  var r_div = document.querySelector(".rooms").children;
  if (r_value > 1) {
    r_div[2].style.display = "none";
    for (var i = 1; i < r_value; i++) {
      r_div[i].style.display = "block";
    }
  } else {
    r_div[1].style.display = "none";
    r_div[2].style.display = "none";
  }
});

orderButton.addEventListener("click", function() {
  var orderDiv = document.getElementById("order-div");
  var arr = document.querySelector(".arrival");
  var dep = document.querySelector(".departure");
  var num = document.getElementById("people");
  var child = document.getElementById("children");
  var select_children = document.querySelector(".select_children");
  var child_age = select_children.children;
  orderDiv.innerHTML = "";
  orderDiv.innerHTML += `Дата прибытия : ${arr.value} <br>`;
  orderDiv.innerHTML += `Дата отбытия : ${dep.value} <br>`;
  orderDiv.innerHTML += `Количество людей : ${num.value} <br>`;
  if (child.value) {
    orderDiv.innerHTML += `Количество детей : ${child.value} <br>`;
    var len = child_age.length;
    for (var i = 0; i < len; i++) {
      orderDiv.innerHTML += `Возраст ребенка ${i + 1} : ${
        child_age[i].value
      } <br>`;
    }
  }
});

// гит кракен тест
