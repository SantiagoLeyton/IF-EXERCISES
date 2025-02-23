let sim;
let operator;
let data;
let minuteV;
let minutes;
let minimumV;
let msg13;

while (true) {
    sim = parseInt(prompt(`Hi user! be welcome to CaluMovil app, to start just answer these questions.
        
What operator are you using now?

1. Tigo
2. Claro
3. Movistar`));
    if(!isNaN(sim) && sim > 0 && sim < 4){
        break;
    };
    alert(`Please select an option, just put a number.`);
};

switch (sim) {
    case 1: 
        operator = 'Tigo';
        minuteV = 200;
        data = 12000;
        minimumV = 45000;
        break;

    case 2:
        operator = 'Claro';
        minuteV = 100;
        data = 18000;
        minimumV = 30000;
        break;

    case 3:
        operator = 'Movistar';
        minuteV = 250;
        data = 8000;
        minimumV = 40000;
        break;
};

while (true) {
    minutes = parseInt(prompt(`How many intenrnational minutes did you use?`));
    if(!isNaN(minutes) && minutes > 0) {
        break;
    };
    alert('Please into a valid number.')
};

document.getElementById('ThirteenthAns').innerHTML = `
<h2>${operator}</h2>

<p><strong>Fixed value:</strong> ${minimumV} <br>
<strong>Value of the international minutes:</strong> ${minuteV} <br>
<strong>Value of data pack:</strong> ${data} <br>
<br>
<strong>Total value of the international minutes:</strong> ${minuteV} x ${minutes} = ${minuteV*minutes}`;