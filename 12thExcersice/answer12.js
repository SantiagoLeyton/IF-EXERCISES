let defectiveM = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
let modelN;
let msg12;

while (true) {
    modelN = parseInt(prompt("Join here the number of your model car"));
    
    if (!isNaN(modelN) && modelN > 0) {
        break;
    };
    
    alert("Please join a valid option");
};

function Fmsg11(a, b) {
if (a.includes(b)) {
    return ("The car is defective, take it to warranty");
} else {
    return ("Your car is not defective");
};
/*
Here I used a new command again, but this command is so important and auseful

.includes() is used to verify if an array have an specific element.
*/
};

msg12 = Fmsg11(defectiveM, modelN)



document.getElementById('TwelfthAns').innerHTML = `
<h2>CAR WORKSHOP</h2>

<p>We review the details of you car and we can give you this conclusion <br>
${msg12}`