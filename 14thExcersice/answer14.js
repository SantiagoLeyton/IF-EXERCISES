let sizeN;
let size;
let sizeV;
let beacon;
let jalapeno;
let turkey;
let cheese;
let beaconV;
let turkeyV;
let cheeseV;
let ingredients;
let ingredientsA = [];

alert(`Welcome to SandwichOrder, to start, answer these questions`);

while (true) { //size & sizeN
    sizeN = parseInt(prompt(`What sandwich size do you want?
1. small
2. big`));
    if(!isNaN(sizeN) && sizeN > 0 && sizeN < 3) {
        switch (sizeN) {
            case 1:
                size = 'Small';
                sizeV = 6000;
                break;
            
            case 2:
                size = 'Big';
                sizeV = 12000;
                break;
        };
        break;
    } else {
    alert('Please select an option.');
    };
};

while (true) { //beacon
    beacon = parseInt(prompt(`Do you wanna add beacon to your sandwich?
1. yes
2. no`));
    if(!isNaN(beacon) && beacon > 0 && beacon < 3){
        switch (beacon) {
            case 1:
                beacon = true;
                beaconV = 3000;
                break;
            
            case 2:
                beacon = false;
                beaconV = 0;
                break;
        };
        break;
    } else {
    alert('Please select an option.');
    };
};

while (true) { //jalapeno
    jalapeno = parseInt(prompt(`Do you wanna add jalapeno to your sandwich?
1. yes
2. no`));
    if(!isNaN(jalapeno) && jalapeno > 0 && jalapeno < 3){
        switch (jalapeno) {
            case 1:
                jalapeno = true;
                break;

            case 2:
                jalapeno = false;
                break;
        }
        break;
    } else {
    alert('Please select an option.');
    };
};

while (true) { //turkey
    turkey = parseInt(prompt(`Do you wanna add turkey to your sandwich?
1. yes
2. no`));
    if(!isNaN(turkey) && turkey > 0 && turkey < 3){
        switch (turkey) {
            case 1:
                turkey = true;
                turkeyV = 3000;
                break;

            case 2:
                turkey = false;
                turkeyV = 0;
                break;
        };
        break;
    } else {
    alert('Please select an option.');
    };
};

while (true) { //cheese
    cheese = parseInt(prompt(`Do you wanna add cheese to your sandwich?
1. yes
2. no`));
    if(!isNaN(cheese) && cheese > 0 && cheese < 3){
        switch (cheese) {
            case 1:
                cheese = true;
                cheeseV = 2500;
                break;

            case 2:
                cheese = false;
                cheeseV = 0;
                break;
        };
        break;
    } else {
    alert('Please select an option.');
    }
};

if (beacon) {
    ingredientsA.push("Beacon");
};
if (jalapeno) {
    ingredientsA.push("Jalapeno");
};
if (turkey) {
    ingredientsA.push("Turkey");
};
if (cheese) {
    ingredientsA.push("Cheese");
};

ingredients = ingredientsA.length > 0 ? ingredientsA.join(", ") : "No extra ingredients";
/* Here I used two new attributes [.push() & .join()] to do this code simpler.

.push() is used for add things to an array.
    for example: 
        array = [];
        array.push('example');
        - now array is like this: array = ['example']

.join() is used fot show the elements of an array but with a separation.
    for example:
        array = [1, 2, 3].
        array.join() - this would give me the result "123" because don't have any separation.
        array.join(', ') - this would give me the result "1, 2, 3" because here it've a separatin.
*/

function valueF(a, b, c, d) {
    return a + b + c + d;
}

finalV = valueF(sizeV, beaconV, turkeyV, cheeseV);

document.getElementById('FourteenAns').innerHTML = `
<h2>SANDWICH ORDER</h2>

<p><strong>Sandwich Size:</strong> ${size} <br>
<strong>Ingredients:</strong> ${ingredients} <br>
<strong>Total Price:</strong> ${finalV} <br>
<br>
<strong> THANKS FOR TOUR PURCHASE! </strong>`