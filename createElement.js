const firstDiv = document.querySelector('div');
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic';
firstDiv.insertBefore(subHeading, firstDiv.children[1]);

const secondDiv = document.querySelectorAll('div')[1];
const paragraph = document.createElement('p');
paragraph.textContent = 'Total fruits: 4';
paragraph.id = 'fruits-total';
secondDiv.insertBefore(paragraph, secondDiv.querySelector('ul'));
