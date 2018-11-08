// Timeframe text selection
let amTF = document.querySelector("#amTF");
let pmTF = document.querySelector("#pmTF");
let bothTF = document.querySelector("#bothTF");

// Time frame checkbox
let difAM = document.querySelector("#difAM");
let difPM = document.querySelector("#difPM");

let cliAM = document.querySelector("#cliAM");
let cliPM = document.querySelector("#cliPM");

let mupAM = document.querySelector("#mupAM");
let mupPM = document.querySelector("#mupPM");

let duoAM = document.querySelector("#duoAM");
let duoPM = document.querySelector("#duoPM");

let bpwAM = document.querySelector("#bpwAM");
let bpwPM = document.querySelector("#bpwPM");

let niaAM = document.querySelector("#niaAM");
let niaPM = document.querySelector("#niaPM");

let sunText = document.querySelector("#sunText");

let comments = document.querySelector("#comments");

// Preview area
let preview = document.querySelector("#preview");
let morning = document.querySelector(".morning");
let evening = document.querySelector(".evening");
let amList = document.querySelector("#amList");
let pmList = document.querySelector("#pmList");
let cmtText = document.querySelector(".cmtText");
let print = document.querySelector("#print");



// Have text box appear for timeframe instructions
function timeSelect() {
    if (bothTF.selected == true) {
        console.log('TF both checked');
        morning.style.display = "block";
        evening.style.display = "block";

    } else if (amTF.selected == true) {
        console.log('AM checked');
        morning.style.display = "block";
        evening.style.display = "none";

    } else if (pmTF.selected == true) {
        console.log('PM checked');
        evening.style.display = "block";
        morning.style.display = "none";

    } else {
        console.log('None checked');
        morning.style.display = "none";
        evening.style.display = "none";
    }
}


// Display additional comments
function displayCmt() {
    if (comments.checked == true) {
        console.log('Comments checked');
        cmtText.style.display = "block";
    } else {
        console.log('No comments');
        cmtText.style.display = "none";
    }
}


// Add sunscreen to morning routine
function displaySun() {
    if (sunText.checked == true) {
        console.log('sunscreen checked');
        let li = document.createElement("LI");
        let liText = document.createTextNode("Apply sunscreen. If outside for extended amounts of time, reapply sunscreen every 2 hours.");
        li.appendChild(liText);
        amList.appendChild(li);
    } else {
        console.log('No sunscreen');
    }
}


// Checks which Differin box is checked to display
function difChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode("Differin 0.1% Gel - Apply pea size amount to full dry face after cleansing.");

    let ul = document.createElement("UL");
    let li1 = document.createElement("LI");
    let liText1 = document.createTextNode("Avoid applying directly to under eyes, corners of mouth and creases of nose.");

    let li2 = document.createElement("LI");
    let liText2 = document.createTextNode("Start every other night and increase to nightly as tolerated.");

    li.appendChild(liText);
    li1.appendChild(liText1);
    li2.appendChild(liText2);
    li.appendChild(ul);
    ul.setAttribute("class", "difUL");
    ul.appendChild(li1);
    ul.appendChild(li2);


    if (difAM.checked == true && difPM.checked == true) {
        console.log('Both dif tf');
        amList.appendChild(li);
        pmList.appendChild(li);

    } else if (difAM.checked == true) {
        console.log('difAM');
        amList.appendChild(li);

    } else if (difPM.checked == true) {
        console.log('difPM');
        pmList.appendChild(li);

    } else {
        console.log('No dif');
    }
}


// Checks which Clindamycin box is checked to display
function cliChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode('Clindamycin Lotion - Apply thin layer to "hot spots".');
    li.appendChild(liText);

    if (cliAM.checked == true && cliPM.checked == true) {
        console.log('Both cli tf');
        amList.appendChild(li);
        pmList.appendChild(li);

    } else if (cliAM.checked == true) {
        console.log('cliAM');
        amList.appendChild(li);

    } else if (cliPM.checked == true) {
        console.log('cliPM');
        pmList.appendChild(li);

    } else {
        console.log('No cli');
    }
}


// Checks which Mupirocin box is checked to display
function mupChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode("Mupirocin - Apply twice a day to affected areas for 7-10 days.");
    li.appendChild(liText);

    if (mupAM.checked == true && mupPM.checked == true) {
        console.log('Both mup tf');
        amList.appendChild(li);
        pmList.appendChild(li);

    } else if (mupAM.checked == true) {
        console.log('mupAM');
        amList.appendChild(li);

    } else if (mupPM.checked == true) {
        console.log('mupPM');
        pmList.appendChild(li);

    } else {
        console.log('No mup');
    }
}


// Checks which Duofilm box is checked to display
function duoChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode("Duofilm 17% - ");
    li.appendChild(liText);

    if (duoAM.checked == true && duoPM.checked == true) {
        console.log('Both duo tf');
        amList.appendChild(li);
        pmList.appendChild(li);

    } else if (duoAM.checked == true) {
        console.log('duoAM');
        amList.appendChild(li);

    } else if (duoPM.checked == true) {
        console.log('duoPM');
        pmList.appendChild(li);

    } else {
        console.log('No duo');
    }
}


// Checks which Benzoyl Peroxide box is checked to display
function bpwChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode("Benzoyl Peroxide Wash - Cleanse face every morning.");
    li.appendChild(liText);

    if (bpwAM.checked == true && bpwPM.checked == true) {
        console.log('Both bpw tf');
        amList.appendChild(li);
        pmList.appendChild(li);

    } else if (bpwAM.checked == true) {
        console.log('bpwAM');
        amList.appendChild(li);

    } else if (bpwPM.checked == true) {
        console.log('bpwPM');
        pmList.appendChild(li);

    } else {
        console.log('No bpw');
    }
}


// Checks which NIA 24 box is checked to display
function niaChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode("Apply NIA 24 exfoiating scrub 2-3 times a week nightly.");
    li.appendChild(liText);

    if (niaAM.checked == true && niaPM.checked == true) {
        console.log('Both nia tf');
        amList.appendChild(li);
        pmList.appendChild(li);

    } else if (niaAM.checked == true) {
        console.log('niaAM');
        amList.appendChild(li);

    } else if (niaPM.checked == true) {
        console.log('niaPM');
        pmList.appendChild(li);

    } else {
        console.log('No nia');
    }
}


// Preview submitted text to print
function previewText() {
    displaySun();
    displayCmt();
    preview.style.display = "block";
    print.style.display = "block";
}


// Print information
function printPreview(divName) {
    let printContents = document.getElementById(divName).innerHTML;
    let ogContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = ogContents;
}
