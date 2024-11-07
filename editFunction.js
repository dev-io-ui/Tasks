// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    let obj = {
        username: username,
        email: email,
        phone: phone
    };

    localStorage.setItem(obj.email, JSON.stringify(obj));
    display(obj);

    
}

function display(obj) {
    const ele = document.querySelector('ul');

    const listItem = document.createElement('li');
    listItem.innerHTML = `${obj.username} - ${obj.email} - ${obj.phone}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function () {
        localStorage.removeItem(obj.email);
        ele.removeChild(listItem);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    editButton.addEventListener('click', function () {
        localStorage.removeItem(obj.email);
        ele.removeChild(listItem);

        document.getElementById('username').value = obj.username;
        document.getElementById('email').value = obj.email;
        document.getElementById('phone').value = obj.phone;
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    ele.appendChild(listItem);
}

module.exports = handleFormSubmit;
