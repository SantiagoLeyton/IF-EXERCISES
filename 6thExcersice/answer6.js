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

if (N1 > N2 && N1 > N3) {
    msg6 = `${N1} is higher than ${N2} or ${N3}`;
} else if (N2 > N1 && N2 > N3) {
    msg6 = `${N2} is higher than ${N1} or ${N3}`;
} else {
    msg6 = `${N3} is higher than ${N1} or ${N2}`;
};

document.getElementById('SixthAns').innerHTML = `
<h2>WHICH IS THE HIGHEST NUMBER?</h2>

<p>${msg6}</p>`