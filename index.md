---
layout: index
---

# DOM - Document Object Model

## Getting an Element
<pre><code>document.getElementById
document.getElementsByTagName
document.getElementByClassName
</code></pre>

### Example

<pre><code>var pageHeader = document.getElementById('page-header');

document.getElementById('text-change').onclick = function(){textChange()};
function textChange() {
  pageHeader.innerHTML = 'Hi JavaScript';
}
</code></pre>

<p id="page-header">This should change</p>
<button class="btn" id="text-change" type="button">Click Me!</button>
<br><br>

## CSS Selector
<pre><code>document.querySelector</code></pre>
This returns only one element. If multiple elements match the selector, only the first will be returned. <br>

<pre><code>document.querySelectorAll</code></pre>
This returns a NodeList.<br><br>

### Example
This will change the text of all elements with the class <code>.btn</code> to blue.
<pre><code>var pageHeader = document.querySelector('header');
var buttons = document.querySelectorAll('.btn');

document.getElementById('query').onclick = function(){
  for(var i = 0; i < buttons.length; i++){
        colorChange(buttons[i], 'blue');
  }
};

function colorChange(element, clr) {
      element.style.color = clr;
}
</code></pre>
<bbr>

<button class ="btn" id="query" type="button">Click Me!</button>
<br><br>
<a href="http://htmldog.com/guides/javascript/">Source</a>
