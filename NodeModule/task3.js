// What will be the output of the following?



// 1)const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)



// 2) const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1



// console.log(val1)

// console.log(val2)



// 3) const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)


// 1 .

// output of first question will be:

// 1,2 ( we get key:1 and key2 using destructuring , it is concept introduce in java ES6)



// 2 .

// o/p  will be:

// value1 , value2



// 3 .

// o/p will be:

// 1 , 1000 in this case. 

// becuase new variable is created , it will not change original instance.