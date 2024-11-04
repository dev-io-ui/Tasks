// Write the code as shown in the video below:

// Write answer to the questions asked below:
const basket = document.querySelector('#basket-heading');
basket.style.color = 'brown';

const fruit = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.backgroundColor = 'brown';
    fruit[i].style.color = 'white';
}