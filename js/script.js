// Time frame checkbox and textarea
let am = document.querySelector("#am");
let pm = document.querySelector("#pm");
let morning = document.querySelector("#morning");
let evening = document.querySelector("#evening");

// Different products
let dif = document.querySelector("#dif");
let cli = document.querySelector("#cli");
let mup = document.querySelector("#mup");
let duo = document.querySelector("#duo");
let bpw = document.querySelector("#bpw");

// Texts
let instruct = document.querySelector("#instruct");
let amText = document.getElementById("amText");
let pmText = document.getElementById("pmText");

// Preview area
let preview = document.querySelector("#preview");
let name = document.querySelector("#name");
let firstP = document.querySelector("#firstP");
let secondP = document.querySelector("#secondP");
let thirdP = document.querySelector("#thirdP");
let print = document.querySelector("#print");


// Have text box appear for additional instructions
function timeSteps() {
    if (am.checked == true && pm.checked == true) {
        console.log('Both checked');
        morning.style.display = "block";
        evening.style.display = "block";

    } else if (am.checked == true) {
        console.log('AM checked');
        morning.style.display = "block";
        evening.style.display = "none";

    } else if (pm.checked == true) {
        console.log('PM checked');
        evening.style.display = "block";
        morning.style.display = "none";

    } else {
        console.log('None checked');
        morning.style.display = "none";
        evening.style.display = "none";
    }
}


// Display preset instructions for prescription
function productSelect() {
    if (dif.selected == true) {
        console.log('Dif selected');
        instruct.innerHTML = "Apply pea size amount to full dry face after cleansing. Avoid applying directly to under eyes, corners of mouth and creases of nose. Start every other night and increase to nightly as tolerated.";

    } else if (cli.selected == true) {
        console.log('Cli selected');
        instruct.innerHTML = 'Apply thin layer to "hot spots" every morning.';

    } else if (mup.selected == true) {
        console.log('Mup selected');
        instruct.innerHTML = "Apply twice a day to affected areas for 7-10 days.";

    } else if (duo.selected == true) {
        console.log('Duo selected');
        instruct.innerHTML = "Duofilm 17%";

    } else if (bpw.selected == true) {
        console.log('bpw selected');
        instruct.innerHTML = "Cleanse face every morning.";

    } else {
        console.log('None selected');
    }
}

// Preview submitted text to print
function previewText() {
    if (dif.selected == true) {
        name.innerHTML = dif.innerHTML;

    } else if (cli.selected == true) {
        name.innerHTML = cli.innerHTML;

    } else if (mup.selected == true) {
        name.innerHTML = mup.innerHTML;

    } else if (duo.selected == true) {
        name.innerHTML = duo.innerHTML;

    } else if (bpw.selected == true) {
        name.innerHTML = bpw.innerHTML;

    } else {
        console.log('No name');
    }

    firstP.innerHTML = instruct.innerHTML;

    if (am.checked == true && pm.checked == true) {
        secondP.innerHTML = amText.innerHTML;
        thirdP.innerHTML = pmText.innerHTML;

    } else if (am.checked == true) {
        secondP.innerHTML = amText.innerHTML;

    } else if (pm.checked == true) {
        thirdP.innerHTML = pmText.innerHTML;
    } else {
        console.log('No time frame steps');

    }

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
