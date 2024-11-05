// Write your code below:

const form = document.getElementById('userForm');

form.addEventListener('onClick', function (event)
{
    event.preventDefault();

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phn = document.getElementById('phno').value;
    
    localStorage.setItem('name', 'name');
    localStorage.setItem('email', 'email');
      localStorage.setItem('phno', 'phn');

})