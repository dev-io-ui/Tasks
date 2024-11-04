// Add the Edit Button:
const editBtn = document.createElement('button');
const li = document.createElement('li');
editBtn.classList.add('edit-btn');
editBtn.textContent = 'Edit';
li.appendChild(editBtn);


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fruitToAdd = document.getElementById('fruit-to-add').value.trim();
    
    if (fruitToAdd) {
        const newLi = document.createElement('li');
        newLi.classList.add('fruit');
        newLi.innerHTML = fruitToAdd + ' <button class="delete-btn">x</button> <button class="edit-btn">Edit</button>';
        fruits.appendChild(newLi);
        document.getElementById('fruit-to-add').value = '';
    }
    // event.preventDefault();
    // const fruitToAdd = document.getElementById('fruit-to-add');
    // const newLi = document.createElement('li');
    // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">edit</button>' + li;
    // fruits.appendChild(newLi);
   
});

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
});
