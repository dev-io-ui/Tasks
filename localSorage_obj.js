// Write your code below:


function handleFormSubmit(event) {

    event.preventDefault();

    const name = document.
        getElementById('username').value;
        
     const email = document.getElementById('email').value;

     const phone = document.getElementById('phone').value;

    let UserDetails = {
        Username: name,
        Email: email,
        Phone: phone
    };

    
    localStorage.setItem('UserDetails',JSON.stringify(UserDetails));
}