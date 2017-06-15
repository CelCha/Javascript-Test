// var female = {
//   name: "Cel",
//   age: 27,
//   talk: function() {
//     alert("hello wassup");
//   }
// };
//
// var add = function(a,b) {
//     return a + b;
// };
//
// var array= ['item1', 'item2', 'item3'];


//Example 1
var pageHeader = document.getElementById('page-header');
document.getElementById('text-change').onclick = function(){tChange()};
function tChange() {
  pageHeader.innerHTML = 'Hi JavaScript';
}

//Example 2
var buttons = document.querySelectorAll('.btn');
document.getElementById('query').onclick = function(){
  for(var i = 0; i < buttons.length; i++){
        qChange(buttons[i], 'blue');
  }
};
function qChange(element, clr) {
      element.style.color = clr;
}

//Example 3
var popup = document.getElementById("pop-up");
popup.addEventListener('click', alertPop);

function alertPop(event) {
  alert("Hi Javascript!");
}
