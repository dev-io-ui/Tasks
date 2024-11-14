const array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const newArray = array.map((item) => item.trim() === '' ? 'empty string' : item);



console.log(newArray);



// 2

// because it is refrence type, and if we add then also refrence of it not changes.



// 3



// spread operator is used to copy array or object , it create new object.

// ...obj is used for this.



// 4

// rest operator is same as spread only differece is where we used is , if we use it in parameter , it will check give all the parameters , ...args is used for it.



// first question output will be "different object"

// because it refrence of both object are diff.



// second question output will be:

// key1:1 , key2:2 in first consol

// key1:1000, key2:2 in second consol

