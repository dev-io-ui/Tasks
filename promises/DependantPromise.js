// Write your code at relevant places in the code below:
function orderFood() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        const food = Math.random();
        if (food>0.5) 
        {
          resolve("Food delivered");
        }
        else {
          reject("Food not delivered");
        }
      },2000);
    });
  }
  
  function orderDessert() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const food = Math.random();
        if (food>0.5) {
          resolve("Dessert delivered");
        }
        else {
          reject("Dessert not delivered");
        }
      }, 2000);
    });
  }
  orderFood()
    .then((res) => {
      console.log(res);
      return orderDessert();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // Do not touch the code below:
  module.exports = {
    orderFood,
    orderDessert,
  };
  