// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');

const filter = document.getElementById('filter');

const descriptionInput = document.createElement('input');
descriptionInput.type ='text';
descriptionInput.id ='fruit-description';
descriptionInput.placeholder ='Enter fruit description...';
form.insertBefore(descriptionInput ,form.querySelector('button'));

// Show the fruit description in italics on the next line
const para = document.createElement('p');
para.append(descriptionInput.style.fontStyle = 'italic');


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

filter.addEventListener('keyup' , function (event)
{
    const  inputText = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');

    for(let i=0;i<fruitItems.length;i++)
    {
        const curruntFruitItem = fruitItems[i].firstChild.textContent.toLowerCase();
        if(curruntFruitItem.indexOf(inputText)===-1)
        {
            fruitItems[i].style.display ='none';
        }
        else
        {
            fruitItems[i].style.display ='flex';
        }
    }

})
