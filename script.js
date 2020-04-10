const addButton = document.getElementById("addButton");
const input = document.getElementById("input");
const ul = document.querySelector("ul");


/*
var itemText = document.createTextNode(listInput.value); // creates text for the list element
li.appendChild(itemText); // adds text to the list element 
--
the above equals the same as li.appendChild(document.createTextNode(listInput.value));
*/


function inputLength() { // this function checks for the length of the input value
  return input.value.length; 
}

function createListElement() {
  var li = document.createElement("li"); // creating the list element
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li); // adding the list element to the ul
  input.value = ""; // clears the input box (to an empty string)
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
     createListElement();
  }
}

addButton.addEventListener("click", addListAfterClick); // addButton adds an item to the current todo list when clicked

input.addEventListener("keypress", addListAfterKeypress); // addButton adds an item to the current todo list when enter is pressed


// Goal: Mark a line through list item that is clicked on 
// Get a reference to the li that is clicked on 
var itemDone = document.getElementsByTagName("li");
//
