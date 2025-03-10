let number;
let kindNumber;
function msg2() {
while (true) {
    number = parseInt(prompt(`Put here some nomber, I'll tell you if is a even or odd number`))

    if (number === 0) {
        return `<h2>EVEN OR ODD? 🤔</h2>

        <p>You selected the number <strong>${number}</strong><br>
        0 is an excepcion, is not even or odd</p>`;
    } else if (number % 2 === 0) {
        return `<h2>EVEN OR ODD? 🤔</h2>

        <p>You selected the number <strong>${number}</strong><br>
        The number ${number} is even</p>`;
    } else if (number % 2 !== 0) {
        return `<h2>EVEN OR ODD? 🤔</h2>

        <p>You selected the number <strong>${number}</strong><br>
        The number ${number} is odd</p>`;
    };

    alert('You only can use numbers, try to avoid letters, emojis or symbols.')
};
};
document.getElementById('SecondAns').innerHTML = msg2();