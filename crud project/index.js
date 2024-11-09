// window.onload = function () {
//     display("all"); // Display all categories on load
// };
// function handleFormSubmit(event) {
//     event.preventDefault();

//     const price = document.getElementById("price").value;
//     const product_details = document.getElementById("product").value;
//     const selectoption = document.getElementById("selectOptions");
//     const catagary = selectoption.options[selectOptions.selectedIndex].text;

//     let obj = {
//         price: price,
//         product_details: product_details,
//         catagary, catagary
//     }

//     axios.post("https://crudcrud.com/api/959dfdab38d74f7aba51a3f0fe800d0e/E-Com", obj)
//         .then((res) => {
//             console.log(res);
//             if (catagary === "all") {
//                 display("all");
//                 console.log("all catagory is "+ catagary );
//             }
//             else if (catagary === "electronics") {
//                 display("electronics");
//                 console.log("electronics catagory is "+ catagary );
//             }
//             else if (catagary === "sports") {
//                 display("sports");
//                 console.log("sports catagory is "+ catagary );
//             }
//             else if (catagary === "food") {
//                 display("food");
//                 console.log("food catagory is "+ catagary );
//             }

//         }).catch((err) => {
//             console.log(err);
//         })

//     event.target.reset();
// }

// function display(type) {
//     axios.get("https://crudcrud.com/api/959dfdab38d74f7aba51a3f0fe800d0e/E-Com")
//         .then((response) => {
//             console.log(type);
//             const ele = document.getElementById(type);

//             for (let i = 0; i < response.data.length; i++) {
//                 const item = response.data[i];
//                 const listItem = document.createElement('li');
//                 listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
//                 listItem.innerHTML = `${item.price} - ${item.product_details} - ${item.catagary}`;

//                 const deleteBtn = document.createElement('button');
//                 deleteBtn.innerText = 'Delete';
//                 deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
//                 deleteBtn.setAttribute('data-id', item._id);
//                 deleteBtn.onclick = function () {
//                     deleteProduct(item._id);
//                 };
//                 listItem.appendChild(deleteBtn);
//                 ele.appendChild(listItem);
//             }
//         }).catch((err) => {
//             console.log(err);
//         });


// }

// function deleteProduct(id) {
//     axios.delete(`https://crudcrud.com/api/959dfdab38d74f7aba51a3f0fe800d0e/E-Com/${id}`)
//         .then((res) => {
//             console.log(res);
//             display("all");
//         }).catch((err) => {
//             console.log(err);
//         })
// }


window.onload = function () {
    display(); // Display all categories on page load
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

    axios.post("https://crudcrud.com/api/959dfdab38d74f7aba51a3f0fe800d0e/E-Com", obj)
        .then((res) => {
            console.log(res);
            display(); // Re-display all categories after adding a new product
        }).catch((err) => {
            console.log(err);
        });

    event.target.reset();
}

function display() {
    // Get all category sections (assuming you have containers with IDs like 'electronics', 'sports', etc.)
    const categories = ['electronics', 'sports', 'food', 'all'];

    axios.get("https://crudcrud.com/api/959dfdab38d74f7aba51a3f0fe800d0e/E-Com")
        .then((response) => {
            // Loop through each category section
            categories.forEach((category) => {
                const ele = document.getElementById(category);
                if (ele) {
                    // ele.innerHTML = ''; // Clear the existing list before re-rendering

                    // Loop through all items and display them in the appropriate category section
                    for (let i = 0; i < response.data.length; i++) {
                        const item = response.data[i];

                        // Display the item if its category matches the current section (or if it's 'all')
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
    axios.delete(`https://crudcrud.com/api/959dfdab38d74f7aba51a3f0fe800d0e/E-Com/${id}`)
        .then((res) => {
            console.log(res);
            display(); // Re-render all categories after deletion
        }).catch((err) => {
            console.log(err);
        });
}
