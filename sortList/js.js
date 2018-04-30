var name1 = { name: "Вася", lastname: "Сутулый", old: 52 };
var name2 = { name: "Яваскрипт", lastname: "Джаваскриптович", old: 12 };
var name3 = { name: "Функция", lastname: "Соколова", old: 24 };
var name4 = { name: "Петро", lastname: "Христич", old: 30 };
var name5 = { name: "Борис", lastname: "Прокопенко", old: 69 };
var name6 = { name: "Архип", lastname: "Яланский", old: 17 };
var name7 = { name: "Доллар", lastname: "По", old: 8 };
var name8 = { name: "Аристарх", lastname: "Опанасенко", old: 48 };
var name9 = { name: "Люда", lastname: "Андреева", old: 24 };
var name10 = { name: "Татьяна", lastname: "Щукина", old: 25 };
var name11 = { name: "Яна", lastname: "Гусаченко", old: 63 };
var name12 = { name: "Антонина", lastname: "Булевая", old: 42 };
var name13 = { name: "Виктория", lastname: "Сова", old: 26 };
var name14 = { name: "Григорий", lastname: "Копейкин", old: 20 };
var name15 = { name: "Федор", lastname: "Грустный", old: 55 };

var nameListArr = [
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  name12,
  name13,
  name14,
  name15
];
var nameListUl = document.body.querySelector(".name-ul");
var lastListUl = document.body.querySelector(".last-ul");
var oldListUl = document.body.querySelector(".old-ul");
var nameClickSort = document.getElementById("name-button");
var lastClickSort = document.getElementById("last-button");
var yearClickSort = document.getElementById("year-button");

function addElements() {
  for (var i = 0; i < 15; i++) {
    nameListUl.innerHTML += `<li>${nameListArr[i].name}</li>`;
    lastListUl.innerHTML += `<li>${nameListArr[i].lastname}</li>`;
    oldListUl.innerHTML += `<li>${nameListArr[i].old}</li>`;
  }
}
addElements();

function sortNameAtoB(a, b) {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}
function sortNameBtoA(a, b) {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
}

function sortLastAtoB(a, b) {
  return a.lastname < b.lastname ? -1 : a.lastname > b.lastname ? 1 : 0;
}
function sortLastBtoA(a, b) {
  return a.lastname > b.lastname ? -1 : a.lastname < b.lastname ? 1 : 0;
}

function sortAgeAtoB(personA, personB) {
  return personA.old - personB.old;
}
function sortAgeBtoA(personA, personB) {
  return personB.old - personA.old;
}

nameClickSort.addEventListener("click", function() {
  nameListUl.innerHTML = "";
  lastListUl.innerHTML = "";
  oldListUl.innerHTML = "";
  if (document.getElementById("name-button").checked) {
    nameListArr.sort(sortNameAtoB);
  } else {
    nameListArr.sort(sortNameBtoA);
  }
  addElements();
});

lastClickSort.addEventListener("change", function(e) {
  nameListUl.innerHTML = "";
  lastListUl.innerHTML = "";
  oldListUl.innerHTML = "";
  if (document.getElementById("last-button").checked) {
    nameListArr.sort(sortLastAtoB);
  } else {
    nameListArr.sort(sortLastBtoA);
  }
  addElements();
  // debugger;
  // e.preventDefault()
});

yearClickSort.addEventListener("change", function(e) {
  nameListUl.innerHTML = "";
  lastListUl.innerHTML = "";
  oldListUl.innerHTML = "";
  if (document.getElementById("year-button").checked) {
    nameListArr.sort(sortAgeAtoB);
  } else {
    nameListArr.sort(sortAgeBtoA);
  }
  addElements();
  // debugger;
  // e.preventDefault()
});


// $('#stateInput').change(function() {
//   console.log('This value is now: ' + $(this).prop('checked'));
// })

// проблемный код

// nameClickSort.addEventListener("click", function() {
//   nameListUl.innerHTML = "";
//   lastListUl.innerHTML = "";
//   oldListUl.innerHTML = "";
//   if (CountN % 2 != 1) {
//     nameListArr.sort(sortNameAtoB);
//     CountN++;
//     debugger;
//   } else {
//     nameListArr.sort(sortNameBtoA);
//     CountN--;
//   }
//   addElements();
//   debugger;
// });

// lastClickSort.addEventListener("click", function() {
//   nameListUl.innerHTML = "";
//   lastListUl.innerHTML = "";
//   oldListUl.innerHTML = "";
//   if (CountL % 2 != 1) {
//     nameListArr.sort(sortLastAtoB);
//     CountL++;
//     debugger;
//   } else {
//     nameListArr.sort(sortLastBtoA);
//     CountL--;
//     debugger;
//   }
//   addElements();
//   debugger;
// });
