let N1;
let N2;
let N3;
let msg6;

while (true) {
    N1 = parseInt(prompt('Join a number'));
    if(isNaN(N1)) {
        alert('Please join a valid number');
    } else {
        break;
    };
};
while (true) {
    N2 = parseInt(prompt('Join a number'));
    if(isNaN(N2)) {
        alert('Please join a valid number');
    } else {
        break;
    };
};while (true) {
    N3 = parseInt(prompt('Join a number'));
    if(isNaN(N3)) {
        alert('Please join a valid number');
    } else {
        break;
    };
};

function FMsg6(a, b, c) {
    if (a > b && a > c) {
        msg6 = `${a} is higher than ${b} or ${c}`;
    } else if (b > a && b > c) {
        msg6 = `${b} is higher than ${a} or ${c}`;
    } else {
        msg6 = `${c} is higher than ${a} or ${b}`;
    };
    return msg6;
};

let FinalMsg6 = FMsg6(N1, N2, N3)

document.getElementById('SixthAns').innerHTML = `
<h2>WHICH IS THE HIGHEST NUMBER?</h2>

<p>${FinalMsg6}</p>`