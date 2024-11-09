// Write your code below:
function handleFormSubmit(event) {
    axios
        .get(
            "https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/appointmentData"
        )
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                displayUserOnScreen(data[i]);
            }
        })


        .catch((error) => console.log(error));
}

// Do not touch the code below
module.exports = handleFormSubmit;
