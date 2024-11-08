function myButton() {
  const myInput = document.getElementById('input');
  const para = document.getElementById('para');

  // Create a span to hold both text and delete icon
  const newEntry = document.createElement('span');
  newEntry.innerHTML = `${myInput.value} <i class='fas fa-trash-alt float-end' onclick='removeItem(this)' style='cursor: pointer;'></i><br>`;

  // Append the new entry to the paragraph
  para.appendChild(newEntry);

  // Clear the input field after appending the new entry
  myInput.value = "";
}

// Function to clear all content from 'para'
function clearAll() {
  const para = document.getElementById('para');
  para.innerHTML = "";  // Clears all content inside 'para'
}

// Function to remove individual item when delete icon is clicked
function removeItem(element) {
  element.parentElement.remove();
}

// Event listener for delete button to clear all items
const deleteitem = document.getElementById('btn-1');
deleteitem.addEventListener('click', clearAll);
