let gender;
let age7;
let msg7;
let help7;

while (true) {
    gender = parseInt(prompt(`Respond with the number that matches your gender
1. female
2. male`));
    if(gender == 1 || gender == 2) {
        break;
    };
    alert('Please select a correct option.')
};
if (gender == 1) {
while (true) {
    age7 = parseInt(prompt(`How old are you?`));
    if(isNaN(age7) || age7 < 0){
        alert(`Please join a valid number`)
    } else if(age7 > 50){
        help7 = 120000
        break;
    } else if (age7 >= 30){
        help7 = 100000
        break;
    } else if (age >= 0){
        help7 = `Can't aply to the help`
        break;
    };
    alert(`Please join a valid number`);
}} else {
    help7 = 40000
};

document.getElementById('SeventhAns').innerHTML = `
<h2>GOBERNMENT HELP</h2>

<p><strong>The value of the help is ${help7}</strong></p>`