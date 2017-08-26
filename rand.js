var pickButton;
var header;
var body;
var choice;
var aList;
var clickButton;
var duoButton;
var titleButton

var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];

var Titles = [
    "The Outstanding",
    "The Hungry",
    "The Champ",
    "Excellent",
    "Deaf",
    "Web Master",
    "Mother of Dragons",
    "Slayer of Lies"
]

var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'yellow', 0,
  'black'
];
var cur = 0;

//function randomNoRepeats(array) {
//    var copy = array.slice(0); // make copy of students array so no harm to original 
//    return function() {  //annonymous function
//     // if (copy.length < 1) { copy = array.slice(0); }
//       var index = Math.floor(Math.random() * copy.length);
//      var item = copy[index];
//      copy.splice(index, 1);
//      return item;
//    };
//  }
//
//let chooser = randomNoRepeats(students)

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');
  clickButton = document.getElementById('clickButton');
  duoButton = document.getElementById('duoButton');
  titleButton = document.getElementById('titleButton');

  pickButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );
  clickButton.addEventListener('click', clickOnPick);
  duoButton.addEventListener('click', duoOnClick);
  titleButton.addEventListener('click', titleOnClick)

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});


var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'

  //  let pickName = chooser();
       
    var rand = students.splice(Math.floor(Math.random() * students.length), 1);
    
    
    
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
        if(rand[0].length % 2 === 0){
            rand[0] = rand[0] + '!';
            choice.innerText = rand;
        }else {
      choice.innerText = rand;
    }
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}

var clickOnPick = function(event){
    
    alert("Hey, what's up?");
}

var duoOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1);
  var rand1 = students.splice(Math.floor(Math.random() * students.length),1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerHTML = rand + ' <i class="em em-heart"></i> ' + rand1
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}


var titleOnClick = function(event){
    choice.innerHTML = '&nbsp;'
    var rand = students.splice(Math.floor(Math.random() * students.length), 1);
    var rand1 = Titles[Math.floor(Math.random() * Titles.length)]
    var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerHTML = rand + ' ' + rand1 + ' <i class="em em-punch"></i>'
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}