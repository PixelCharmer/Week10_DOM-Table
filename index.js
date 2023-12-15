let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('list');
    let row =  table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth(+1)}-${createDate.getDate()}`;
    row.insertCell(1).innerHTML = document.getElementById('new-candidate').value;
    row.insertCell(2).innerHTML = document.getElementById('new-contact-info').value;
    row.insertCell(3).innerHTML = document.getElementById('new-position').value;
    row.insertCell(4).innerHTML = document.getElementById('new-status').value;
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-candidate').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`itemlet -${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}