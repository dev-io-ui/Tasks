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
    const ele = document.getElementById('listOfItem');
    ele.innerHTML = ele.innerHTML + `<li> ${obj.username} - ${obj.email} - ${obj.phone} </li>`
}

module.exports = handleFormSubmit

