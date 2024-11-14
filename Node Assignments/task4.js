
function forC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c');
            resolve();
        }, 3000);


    });
}
function forD() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('d')
            resolve();
        }, 0);

    })
}
async function result() {
    console.log('a');

    console.log('b');

    await forC();

    await forD();

    console.log('e');

}
result();



// What willl be the output of this



// 1) console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');





// 2) console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

// 1.o/p :

// a ,b ,d, c



// 2.

// a,b,e,d,c 