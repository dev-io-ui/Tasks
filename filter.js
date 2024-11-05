const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
const filter = document.getElementById('filter');

// Step 1: Add an input element for the fruit description with ID "description"
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description...';
form.insertBefore(descriptionInput, form.querySelector('button'));

// Step 2: Handle form submission to add fruit name and description to the list
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fruitName = document.getElementById('fruit-to-add').value.trim();
    const fruitDescription = descriptionInput.value.trim();

    // Check if both name and description are filled out
    if (fruitName && fruitDescription) {
        // Create a new <li> element for the fruit item
        const li = document.createElement('li');
        li.classList.add('fruit');

        // Add fruit name as a <span> inside <li>
        const fruitNameSpan = document.createElement('span');
        fruitNameSpan.textContent = fruitName;
        li.appendChild(fruitNameSpan);

        // Create a <p> element for the description, with italics, on the next line
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.style.fontStyle = 'italic';
        descriptionParagraph.textContent = fruitDescription;
        li.appendChild(descriptionParagraph);

        // Append the new list item to the fruits list
        fruits.appendChild(li);

        // Clear the input fields after adding the fruit
        document.getElementById('fruit-to-add').value = '';
        descriptionInput.value = '';
    } 
});

// Step 3: Implement filter to match fruit name or description
filter.addEventListener('keyup', function (event) {
    const inputText = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');

    for (let i = 0; i < fruitItems.length; i++) {
        const curruntFruitItem = fruitItems[i].firstChild.textContent.toLowerCase();
        if (curruntFruitItem.indexOf(inputText) === -1) {
            fruitItems[i].style.display = 'none';
        }
        else {
            fruitItems[i].style.display = 'flex';
        }
        
    }
});
