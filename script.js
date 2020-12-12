// Project: Create a todo list
// Step 1: Create variables to store elements 
// Step 2: Create a function that checks length of input
// Step 3: Create a function that creates a new todo
// Step 4: Create a function that to mark todo as complete/finished
// Step 5: Create a function to remove a completed/finshed todo


// These references to HTML elements to be used in js functions
const addButton = document.getElementById("addButton");
const input = document.getElementById("input");
const ul = document.getElementById("itemsList"); 
const listItems = document.getElementById("itemsList").children;


// function that checks the length of input and returns it
function inputValueLength() {
  if (input.value.length > 0) {
    return input.value.length;
  }
};

// function to toggle "done" class 
function toggleTodoEvent(event){
  event.target.classList.toggle("done");
}

// function to create the new todo (list item/element)
function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", toggleTodoEvent);
  ul.appendChild(li);
  input.value = "";

 
};

// create a list element upon "addbutton" click
addButton.addEventListener("click", function() {
  if (inputValueLength() > 0) {
    createListElement();
  }
});

// create a list element upon "enter" keypress
input.addEventListener("keyup", function(event) {
  if (inputValueLength() > 0 && event.which == 13) {
    createListElement();
  }
}); 

// Function that loops through the list of the todo items
// upon click toggles the "done" class marking the todo as complete
// "[...listItems]" is an array (no longer a nodeList)
[...listItems].forEach(function (element) {
  element.addEventListener("click", toggleTodoEvent);
});
