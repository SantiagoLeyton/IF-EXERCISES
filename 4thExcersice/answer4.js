let number4;
let msg4;

while (true) {
    number4 = parseInt(prompt(`Enter a number, and I'll tell you if it's even or odd:`));

    if (isNaN(number4)) {
        alert(`Please enter a number, avoid symbols or letters`);
    } else if (number4 === 0) {
        msg4 = `The number 0 is an exception, it is neither odd nor even.`;
        break;
    } else if ((number4 & 1) === 0) {
        msg4 = `The number ${number4} is even.`;
        break;
    } else if ((number4 & 1) === 1) {
        msg4 = `The number ${number4} is odd.`;
        break;
    }
} 

/*
Here I showed another method to check if a number is even or odd.

When you use the symbol "&" you can verify with the binary 
version of this number: if the binary ends with 0, the number
is even; however, if the binary ends with 1, the number is odd.

And here I used a new function "isNaN()", which verifies the value of the variable.
If the value is NaN (Not-a-Number), the result is true.
*/

function answer4() {
    return `<h2>SECOND METHOD TO VERIFY EVEN AND ODD</h2>

<p><strong>${msg4}</strong></p>`;
}

document.getElementById('FourthAns').innerHTML = answer4();