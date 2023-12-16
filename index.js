let id = 0;

// grabbing the create button and adding an click event listener
document.getElementById('add').addEventListener('click', () => {
    // will populate the date field in the table 
    let createDate = new Date();
    let table = document.getElementById('list');
    // adding a new row at index 1 to the table. Then setting the attribute that will be incremented each time a new row is added
    let row =  table.insertRow(1);
    row.setAttribute('id', `item-${id}`);

    // this inserts the form data into the newly created row. This first cell auto inserts the date the record is being made
    row.insertCell(0).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth(+1)}-${createDate.getDate()}`;
    row.insertCell(1).innerHTML = document.getElementById('new-candidate').value;
    row.insertCell(2).innerHTML = document.getElementById('new-contact-info').value;
    row.insertCell(3).innerHTML = document.getElementById('new-position').value;
    row.insertCell(4).innerHTML = document.getElementById('new-status').value;
    
    // creates a delete button that is appeneded to the end of the row to allow for deleting of row data
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
   
    // this clears the input fields after a new row is added
    document.getElementById('new-candidate').value = '';
})


// this function pertains to the newly created delete button. 
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    
    // Sets the onclick event handler for the button. When the button is clicked, it logs a message to the console indicating which row is being deleted. 
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`itemlet -${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}