let number;
let msg;
let kindNumber;

while (true) {
    number = parseInt(prompt(`Put here some nomber, I'll tell you if is a even or odd number`))

    if (number === 0) {
        msg = `0 is an excepcion, is not even or odd`;
        break;
    } else if (number % 2 === 0) {
        msg = `The number ${number} is even`;
        break;
    } else if (number % 2 !== 0) {
        msg = `The number ${number} is odd`;
        break;
    };

    alert('You only can use numbers, try to avoid letters, emojis or symbols.')
};

document.getElementById('SecondAns').innerHTML = `<h2>EVEN OR ODD? 🤔</h2>

<p>You selected the number <strong>${number}</strong><br>
${msg}</p>`;