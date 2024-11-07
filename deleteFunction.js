// Write your code below:
// Write your code below:
// Write your code below:
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

    display(obj)
};

function display(obj) {
    const ele = document.querySelector('ul');
   
    const listItem = document.createElement('li');
    listItem.innerHTML = `${obj.username} - ${obj.email} - ${obj.phone} `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function () {
        // Remove user from local storage
        localStorage.removeItem(obj.email);

        // Remove the list item from the DOM
        ele.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    ele.appendChild(listItem);

    
}

module.exports = handleFormSubmit

