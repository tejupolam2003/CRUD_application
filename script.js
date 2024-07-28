document.addEventListener('DOMContentLoaded', () => {
    displayItems();
});

function getItems() {
    let items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
}

function setItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
}

function createItem() {
    const newItemInput = document.getElementById('newItem');
    const newItemText = newItemInput.value.trim();

    if (newItemText) {
        let items = getItems();
        items.push(newItemText);
        setItems(items);
        newItemInput.value = '';
        displayItems();
    }
}

function updateItem(index) {
    const updateInput = document.getElementById(`update-${index}`);
    let items = getItems();
    items[index] = updateInput.value.trim();
    setItems(items);
    displayItems();
}

function deleteItem(index) {
    let items = getItems();
    items.splice(index, 1);
    setItems(items);
    displayItems();
}

function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    let items = getItems();
    items.forEach((item, index) => {
        const listItem = document.createElement('li');

        const itemText = document.createElement('input');
        itemText.type = 'text';
        itemText.value = item;
        itemText.id = `update-${index}`;

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateItem(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteItem(index);

        listItem.appendChild(itemText);
        listItem.appendChild(updateButton);
        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
    });
}
