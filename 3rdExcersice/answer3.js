let washingMch;
let washingMchSize;
let washingMchPrice;
let numberOfWM;
let hour3;
let finalNmbr;

while (true) {
    washingMch = parseInt(prompt(`Which size washing machine do you want?

1. Big washing machine (4000 for hour)
2. Small washing machine (3000 for hour)`))

        if(washingMch === 1) {
            washingMchPrice = 4000
            washingMchSize = `big`;
            break;
        } else if (washingMch === 2) {
            washingMchPrice = 3000
            washingMchSize = (`small`)
            break;
        };

        alert(`You only can select one of those options!`);
};

while (true) {
    numberOfWM = parseInt(prompt(`How many machines do you want to use?`))
    if (numberOfWM > 0) {
        break;
    };

    alert(`You've to put the number of machines that you wanna use`);
}

while (true) {
    hour3 = parseInt(prompt(`How many hours do you need with the machines?`))

    if (hour3 > 0) {
        break;
    };

    alert('Only tell me, how many hours do you need with the machines?')
};

if (numberOfWM > 3) {
    finalNmbr = (hour3*washingMchPrice)/0.97
} else {
    finalNmbr = hour3*washingMchPrice
};

finalNmbr = finalNmbr.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
/* Here I'm using a new command again, but let me explain you

1) .toLocaleString() converts a number in a chain text according to the language or region's configuration.
2) 'en-US' specify the format of United States
3) minimumFractionDigits: 2 - Ensures that there are always at least 2 decimal places
4) maximumFractionDigits: 2 - Limit to a maximum of 2 decimals
*/

document.getElementById('ThirdAns').innerHTML = `Total price to rent ${numberOfWM} wching machines size ${washingMchSize} for ${hour3} hours: ${finalNmbr}`;