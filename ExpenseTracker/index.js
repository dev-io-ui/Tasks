// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const desc = document.getElementById('desc').value;
    const selectOptions = document.getElementById('selectOptions');
    const category = selectOptions.options[selectOptions.selectedIndex].text;

    let obj = {
        name: name,
        desc: desc,
        category: category
    };

    localStorage.setItem(obj.name, JSON.stringify(obj));
    display(obj);

    event.target.reset(); // Reset the form fields
}

function display(obj) {
    const ele = document.getElementById('listOfItem');

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.innerHTML = `${obj.name} - ${obj.desc} - ${obj.category}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');

    deleteButton.addEventListener('click', function () {
        localStorage.removeItem(obj.name);
        ele.removeChild(listItem);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn', 'btn-warning', 'btn-sm', 'ms-2');

    editButton.addEventListener('click', function () {
        localStorage.removeItem(obj.name);
        ele.removeChild(listItem);

        document.getElementById('name').value = obj.name;
        document.getElementById('desc').value = obj.desc;

        const options = document.getElementById('selectOptions');
        for (let i = 0; i < options.options.length; i++) {
            if (options.options[i].text === obj.category) {
                options.selectedIndex = i;
                break;
            }
        }
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    ele.appendChild(listItem);
}

