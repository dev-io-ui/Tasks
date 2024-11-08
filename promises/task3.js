// Write your code at relevant places in the code below:
function checkCar() {

    return new Promise((resolve, reject) => {

  setTimeout(() => {

   const busArrivesAt10 = Math.random() > 0.5;

   if (busArrivesAt10) {

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

   const busArrivesAt10 = Math.random() > 0.5;

   if (busArrivesAt10) {

    resolve("Packed everything for picnic");

   } else {

    reject("Error: Not have some essentials");

   }

  }, 1000);

 });  
}

checkCar()
    .then((res) => {
        return packForPicnic();
    })
    .then((res) => {
        console.log("Go for picnic");
    }).catch((err) => {
        console.log("Picnic cancelled");
})
// Do not touch the code below:
module.exports = { checkCar, packForPicnic };
