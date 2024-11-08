// Write your code at relevant places in the code below:
function bookSearchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const flag = Math.random() > 0.5;
            if (flag)
            {
                resolve('Book found');
            }
            else {
                reject('Book not found');
            }
        },3000);
    });

   
}
bookSearchPromise().then((res) => {
    console.log(res);
})
    .catch((error) => {
        console.log(error);
})

//task2
function boilWater() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        resolve("Water boiled");
  
      }, 2000);
    })
  }
  function addCoffeePowder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        resolve("Added coffee powder");
  
      },500);
    })
  }
  
  function brewCoffee() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        resolve("Brewed coffee");
  
      }, 1000);
    })
  }
  
  function haveCoffee() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        resolve("Enjoying my coffee");
  
      }, 3000);
    })
  }
  boilWater().then((res) => {
    console.log(res);
    addCoffeePowder().then((res) => {
      console.log(res);
      brewCoffee().then((res) => {
        console.log(res);
        haveCoffee();
      });
    });
  });

// Don't touch the code below:
module.exports = bookSearchPromise;
