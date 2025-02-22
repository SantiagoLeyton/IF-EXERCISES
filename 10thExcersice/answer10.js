let NumberOfC;
let price10;

while (true) {
    NumberOfC = parseInt(prompt(`How many copies do you need?`))
    if(NumberOfC > 0 && NumberOfC < 500) {
        price10 = NumberOfC*120;
        break;
    } else if(NumberOfC >= 500 && NumberOfC < 750) {
        price10 = NumberOfC*100;
        break;
    } else if(NumberOfC >= 750 && NumberOfC < 1000) {
        price10 = NumberOfC*80;
        break;
    } else if(NumberOfC >= 1000) {
        price10 = NumberOfC*50;
        break;
    };
    alert('Please join a valid number');
};

document.getElementById('TenthAns').innerHTML = `
<h2>PHOTOCOPIER</h2>
<p><strong>Total copies:</strong> ${NumberOfC}
<strong>Final price:</strong> ${price10}`