async function picnicReady() {
    // Write your code here
    try {
      function checkCar() {
  
   return new Promise((resolve, reject) => {
  
    setTimeout(() => {
  
     const carReady = Math.random() > 0.5;
  
     if (carReady) {
  
      resolve("Car is ready");
  
     } else {
  
      reject("Error: Car needs maintenance");
  
     }
  
    }, 2000);
  
   });
  
  }
  
  
  
  function packForPicnic() {
  
   return new Promise((resolve, reject) => {
  
    setTimeout(() => {
  
     const itemsPacked = Math.random() > 0.5;
  
     if (itemsPacked) {
  
      resolve("Packed everything for picnic");
  
     } else {
  
      reject("Error: Not have some essentials");
  
     }
  
    }, 1000);
  
   });
  
  }
  
      const car = await checkCar();
      console.log(car);
      const pic = await packForPicnic();
      console.log(pic);
    }
    catch (error)
    {
      console.log(error);
    }
  }
  
  picnicReady();
  
  // Do not touch the code below:
  module.exports = { picnicReady };
  