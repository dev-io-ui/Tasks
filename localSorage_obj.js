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

    
};