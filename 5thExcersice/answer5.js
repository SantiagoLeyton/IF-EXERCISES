let physics;
let chemistry;
let biology;
let math;
let computing;

while (true) {
    physics = parseInt(prompt('How much did you get in physics?'))

    if (physics <= 10 && physics >= 0) {
        break;
    };
    alert(`You can't have a higher grade than 10 or a grade lower than 0`);
};

while (true) {
    chemistry = parseInt(prompt('How much did you get in chemistry?'))
    if (chemistry <= 10 && chemistry >= 0) {
        break;
    };
    alert(`You can't have a higher grade than 10 or a grade lower than 0`);
};
while (true) {
    biology = parseInt(prompt('How much did you get in biology?'))
    if (biology <= 10 && biology >= 0) {
        break;
    };
    alert(`You can't have a higher grade than 10 or a grade lower than 0`);
};
while (true) {
    math = parseInt(prompt('How much did you get in math?'))
    if (math <=10 && math >= 0) {
        break;
    };
    alert(`You can't have a higher grade than 10 or a grade lower than 0`);
};
while (true) {
    computing = parseInt(prompt('How much did you get in computing?'))
    if (computing <= 10 && computing >= 0) {
        break;
    };
    alert(`You can't have a higher grade than 10 or a grade lower than 0`);
};

let finalGrade = ((physics+chemistry+biology+math+computing)/50)*100;
let range;

function finalRange() {
if (finalGrade < 60) {
    range = 'bad'
} else if (finalGrade <= 80) {
    range = 'good'
} else {
    range = 'excelent'
}
return range;
};

let finalRangeAns = finalRange()

document.getElementById('FifthAns').innerHTML = `
<h2>FINAL GRADES</h2>
<p>Your percentage is ${finalGrade}% and your grade is ${finalRangeAns}</p>`