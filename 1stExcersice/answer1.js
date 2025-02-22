let username;
let hours;
let payment;

while (true) {
    username = prompt(`Write your name here:`);
    let symb0l$ = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if(symb0l$.test(username)) {
        break;
    }; /*
    here I used /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/ to avoid symbols, emojis or numbers

    It works for these reasons:
    1. everything that is into this (/.../) delimit the regular expresion. 
    2. ^ is what it indicates that the validation start in the first character of the chain.
    3. [] defines the valid characters
    4. A-Z enables the capital letters from A to Z
    5. a-z do the same that A-Z but with the small letters
    6. zÁÉÍÓÚáéíóúÑñ also enables this characters
    7. the space at the end enables th space between words
    8. + minimun one character
    9. $ disables aditional characters after the enabled ones
    */

    alert('You only can use letters, avoid symbols or numbers');
};

while (true) {
    hours = parseInt(prompt(`How many hours did you work this week?`))

    if(hours > 40 || hours < 3) {
        alert('Anyone worked more than 40 hours o less than 3 hours!');
    } else if(hours <= 10) {
        payment = 30000 * hours;
        break;
    } else if(hours >= 11) {
        payment = 33000 * hours;
        break;
    };

    alert(`You've to put a number, what are you trying? 🤣`);
}

document.getElementById('FirstAns').innerHTML = `<h2>MONTHLY SALARY</h2>

<p>Hi ${username}, the number of hours is ${hours} and your salary is ${payment} <br>
<strong>Thanks for your service 🙏</strong></p>`