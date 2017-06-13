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

var pageHeader = document.getElementById('page-header');
document.getElementById('text-change').onclick = function(){tChange()};
function tChange() {
  pageHeader.innerHTML = 'Hi JavaScript';
}

var buttons = document.querySelectorAll('.btn');
document.getElementById('query').onclick = function(){
  for(var i = 0; i < buttons.length; i++){
        qChange(buttons[i], 'blue');
  }
};
function qChange(element, clr) {
      element.style.color = clr;
}
