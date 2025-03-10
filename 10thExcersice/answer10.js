let NumberOfC;
let price10;

function FinalPrice() {
while (true) {
    NumberOfC = parseInt(prompt(`How many copies do you need?`))
    if(NumberOfC > 0 && NumberOfC < 500) {
        return NumberOfC*120;
    } else if(NumberOfC >= 500 && NumberOfC < 750) {
        return NumberOfC*100;
    } else if(NumberOfC >= 750 && NumberOfC < 1000) {
        return NumberOfC*80;
    } else if(NumberOfC >= 1000) {
        return NumberOfC*50;
    };
    alert('Please join a valid number');
};
};

price10 = FinalPrice()

document.getElementById('TenthAns').innerHTML = `
<h2>PHOTOCOPIER</h2>
<p><strong>Total copies:</strong> ${NumberOfC}
<strong>Final price:</strong> ${price10}`