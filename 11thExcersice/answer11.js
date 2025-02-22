let funnySound;
let HDD;
let unity;
let msg11;

while (true) {
    funnySound = parseInt(prompt(`When you turn on your PC, does it make a beep sound?\n1. Yes\n2. No`));
    if (!isNaN(funnySound) && (funnySound === 1 || funnySound === 2)) break;
    alert(`Please enter a valid option.`);
}

while (true) {
    HDD = parseInt(prompt(`When you turn on your PC, does your hard drive spin?\n1. Yes\n2. No`));
    if (!isNaN(HDD) && (HDD === 1 || HDD === 2)) break;
    alert(`Please enter a valid option.`);
}

if(funnySound == 1) {
    funnySound = true;
} else {
    funnySound = false;
};
if (HDD == 1) {
    HDD = true;
} else {
    HDD = false;
};

if (funnySound && HDD) {
    msg11 = `Your device is damaged.`;
} else {
    if (funnySound) {
    while (true) {
        unity = parseInt(prompt(`When you turn on your PC, does your unit spin?\n1. Yes\n2. No`));
        if (!isNaN(unity) && (unity === 1 || unity === 2)) break;
        alert(`Please enter a valid option.`);
    }
    if (unity == 1) {
        unity = true;
    } else {
        unity = false
    }

    msg11 = unity ? `Contact technical support.` : `Check unit connections.`;

} else {
    msg11 = HDD ? `Check speaker connections.` : `Take the computer to the repair center.`;
}
}

document.getElementById('EleventhAns').innerHTML = `
<h2>¿HAVE YOU TO FIX YOUR PC?</h2>

<p><strong>Your pc status is:</strong> ${msg11}`