// // //your code here!
// // document.addEventListener("DOMContentLoader",function() {
// // // get the list element
// // const list = document.getElementById("infi-list");
// // // function to add a new list item
// // 	function addListItem() {
// // 		const listItem = document.createElement("li");
// // 		listItem.textContent = "List Item";
// // 		list.appendChild(listItem);
// // 	}

// // // add 10 list items by default
// // 	for (let index = 0; index < 10; index++) {
// // 		addListItem();
// // 	}
// // // function to add 2 more lsit items when reaching the end
// // 	function checkEndOfList() {
// // 		const lastListItem = list.lastChild;
// // 		const lastListItemRect = lastListItem.getBoundingClientRect();
// // 	if (lastListItemRect.bottom <= window.innerHeight) {
// // 		// add 2 more list item
// // 		addListItem();
// // 		addListItem();
// // 	}
// // 	}
// // 	windows.addEventListener("scroll",checkEndOfList);
// // })

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the list and button elements
//   const list = document.getElementById("infi-list");
//   // const addButton = document.getElementById("add-button");

//   // Function to add a new list item
//   function addListItem() {
//     const listItem = document.createElement("li");
//     listItem.textContent = "List Item";
//     list.appendChild(listItem);
//   }

//   // Add 10 list items by default
//   for (let i = 0; i < 10; i++) {
//     addListItem();
//   }

//   // Function to add 2 more list items when reaching the end
//   function checkEndOfList() {
//     const lastListItem = list.lastChild;
//     const lastListItemRect = lastListItem.getBoundingClientRect();
//     if (lastListItemRect.bottom <= window.innerHeight) {
//       // Add 2 more list items
//       addListItem();
//       addListItem();
//     }
//   }

//   // Event listener for scrolling to check the end of the list
//   window.addEventListener("scroll", checkEndOfList);

//   // Event listener for manually adding a list item
//   // addButton.addEventListener("click", addListItem);
// });

// Function to create and append a new list item
function createListItem() {
  const listItem = document.createElement('li');
  listItem.textContent = 'New item';
  document.getElementById('infi-list').appendChild(listItem);
}

// Function to check if the user has scrolled to the end of the list
function isScrolledToBottom() {
  const list = document.getElementById('infi-list');
  return list.scrollTop + list.clientHeight >= list.scrollHeight;
}

// Function to add more list items when the user reaches the end
function addMoreItems() {
  const itemsToAdd = 2; // You can adjust this number as needed

  for (let i = 0; i < itemsToAdd; i++) {
    createListItem();
  }
}

// Initial setup: Add 10 list items by default
for (let i = 0; i < 10; i++) {
  createListItem();
}

// Event listener to detect scrolling to the end and add more items
const list = document.getElementById('infi-list');
list.addEventListener('scroll', function () {
  if (isScrolledToBottom()) {
    addMoreItems();
  }
});

