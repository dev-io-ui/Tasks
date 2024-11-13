window.onload = function () {
    display();
};

function handleFormSubmit(event) {
    event.preventDefault();

    const price = document.getElementById("price").value;
    const product_details = document.getElementById("product").value;
    const selectoption = document.getElementById("selectOptions");
    const catagary = selectoption.options[selectoption.selectedIndex].text.toLowerCase();

    let obj = {
        price: price,
        product_details: product_details,
        catagary: catagary
    };

    axios.post("https://crudcrud.com/api/bf2072cdcc5e48988581df5291ce5323/E-Com", obj)
        .then((res) => {
            console.log(res);
            display();
        }).catch((err) => {
            console.log(err);
        });

    event.target.reset();
}

function display() {
    const categories = ['electronics', 'sports', 'food', 'all'];

    axios.get("https://crudcrud.com/api/bf2072cdcc5e48988581df5291ce5323/E-Com")
        .then((response) => {
            categories.forEach((category) => {
                const ele = document.getElementById(category);
                if (ele) {

                    ele.innerHTML = "";

                    for (let i = 0; i < response.data.length; i++) {
                        const item = response.data[i];

                        if (category === "all" || item.catagary.toLowerCase() === category) {
                            const listItem = document.createElement('li');
                            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                            listItem.innerHTML = `${item.price} - ${item.product_details} - ${item.catagary}`;

                            const deleteBtn = document.createElement('button');
                            deleteBtn.innerText = 'Delete';
                            deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
                            deleteBtn.setAttribute('data-id', item._id);
                            deleteBtn.onclick = function () {
                                deleteProduct(item._id);
                            };
                            listItem.appendChild(deleteBtn);
                            ele.appendChild(listItem);
                        }
                    }
                }
            });
        }).catch((err) => {
            console.log(err);
        });
}

function deleteProduct(id) {
    axios.delete(`https://crudcrud.com/api/bf2072cdcc5e48988581df5291ce5323/E-Com/${id}`)
        .then((res) => {
            console.log(res);
            display();
        }).catch((err) => {
            console.log(err);
        });
}
