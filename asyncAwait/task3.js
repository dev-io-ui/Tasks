async function picnicDecision() {
    // Write your code here
    try {
        function checkWeather() {

            return new Promise((resolve, reject) => {

                setTimeout(() => {

                    const isSunny = Math.random() > 0.5;

                    if (isSunny) {

                        resolve("Let us go for picnic");

                    } else {

                        reject("Error: It is cloudy");

                    }

                }, 3000);

            });

        }
        const v = await checkWeather();
        console.log(v);
    }
    catch (error) {
        console.log(error);
    }
}

picnicDecision();

// Do not touch the code below:
module.exports = { picnicDecision };
