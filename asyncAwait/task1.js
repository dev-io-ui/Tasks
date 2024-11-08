// Write your code here:
async function boardingBus() {
    try {
        function boardBusAt10() {

            return new Promise((resolve, reject) => {

                setTimeout(() => {

                    const busArrivesAt10 = Math.random() > 0.5;

                    if (busArrivesAt10) {

                        resolve("Board the bus");

                    } else {

                        reject("Error: Bus is late");

                    }

                }, 3000);

            });
        }
        const fun =
            await boardBusAt10();
        console.log(fun);

        // Write your code here

    } catch (error) {
        console.log(error);
    }
}

boardingBus();

// Do not touch the code below:
module.exports = { boardingBus };
