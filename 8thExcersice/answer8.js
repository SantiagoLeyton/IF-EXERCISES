let time8;
let monthly;

function ans8() {
while (true) {
    time8 = parseInt(prompt(`How do you wanna pay your gym membership?
1) every 15 days (18,000)
2) every 30 days (35,000)
3) every 3 months (86,000)`))
    if(time8 == 1) {
        monthly = 18000*2;
        break;
    }else if(time8 == 2) {
        monthly = 35000;
        break;
    }else if(time8 == 3) {
        monthly = 86000/3;
        break;
    };

    alert('Please select an option')
};

monthly = monthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

return monthly;
};

let FinalAns8 = ans8()

document.getElementById('EighthAns').innerHTML = `<h2>WORLD GYM</h2>
<p>You are paying ${FinalAns8} every month</p>`