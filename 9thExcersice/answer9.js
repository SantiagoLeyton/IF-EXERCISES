let A1;
let A2;

alert(`Welcome! today we'll make a triangle, you only have to tell me the measure of interior angles.
        
*REMEMBER, the summary of the interior angles have to be equal to 180 degrees*`);

while (true) {
    A1 = parseInt(prompt('Join here the first interior angle'));
    if (!isNaN(A1) && A1 < 179 && A1 > 0) {
        break;
    };
    alert('Please join a valid number');
};
while (true) {
    A2 = parseInt(prompt('Join here the second interior angle'));
    if (!isNaN(A2) && (A1+A2) < 180 && A2 !== 0) {
        break;
    };
    alert(`Please join a valid number, remeber that de summary of the first and second interior angle can't be equal to or higher than 180`)
};

function Angle3(a, b) {
    return 180-a-b;
};

let A3 = Angle3(A1, A2);

document.getElementById('NinethAns').innerHTML = `
<h2>INTERIOR ANGLES OF A TRIANGLE</h2>
<p><strong>First angle is:</strong> ${A1}<br>
<strong>Second angle is:</strong> ${A2}<br>
<strong>Third angle is:</strong> ${A3}<br>
<strong>summary:</strong> ${A1} + ${A2} + ${A3} = ${A1+A2+A3}</p>`