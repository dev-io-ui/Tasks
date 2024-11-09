// Write your code below:
function handleFormSubmit(event) {
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
      };
      axios
        .get(
          "https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/appointmentData/672f53e73af7c503e8d5d56d"
        )
          .then((response) => {
              document.getElementById('username').value = userDetails.username;
              document.getElementById('email').value = userDetails.email;
              document.getElementById('phone').value = userDetails.phone;
              displayUserOnScreen(response.data)
  
          })
          .catch((error) => console.log(error));
  
      axios.delete(
          "https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/appointmentData/672f53e73af7c503e8d5d56d"
      ).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
  
      axios.post(
          "https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/appointmentData/672f53e73af7c503e8d5d56d"
      ).then((res) => { console.log(res) }).catch((err) => { console.log(err) });
  }
  
  
  
  // Do not touch the code below
  module.exports = handleFormSubmit;
  