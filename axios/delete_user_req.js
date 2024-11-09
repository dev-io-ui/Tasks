// Write your code below:
function handleFormSubmit(event) {

    axios
        .delete(
            //url and should give id of the user which details we want to delete
            "https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/appointmentData/672f53e73af7c503e8d5d56d" //
        )
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                displayUserOnScreen(data[i]);
            }
        })

}

// Do not touch the code below
module.exports = handleFormSubmit;
