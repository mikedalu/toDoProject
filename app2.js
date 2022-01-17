// create forms
// create button that adds list items dynamically using event handlers

// add button that removes the item from the list while it is being created
// while the item is created it should come with a button

//create button that add list items dynamically

let myForm = document.getElementById("myForm");
let myList = document.getElementById("myList");
let myInput = document.getElementById("myInput");
let button1 = document.getElementById("button1");

myForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (myInput.value) {
		let capturedInput = ` <div class= "row m-1"> <li class="list-group-item col-5">  ${myInput.value} </li> <button onclick ="removeItem(this)" class="col-sm-1 btn btn-danger">delete</button> </div> `;
		myList.insertAdjacentHTML("beforeend", capturedInput);
		myInput.value = "";
		myInput.focus();
	}
});

function removeItem(e) {
	e.parentElement.remove();
}
