// Different products
let dif = document.querySelector("#dif");
let cli = document.querySelector("#cli");
let mup = document.querySelector("#mup");
let duo = document.querySelector("#duo");
let bpw = document.querySelector("#bpw");

// Time frame checkbox
let am = document.querySelector("#am");
let pm = document.querySelector("#pm");

// Preview area
let preview = document.querySelector("#preview");
let name = document.querySelector("#name");
let amText = document.querySelector("#amText");
let pmText = document.querySelector("#pmText");
let bothText = document.querySelector("#bothText");
let instruct = document.querySelector("#instruct");
let print = document.querySelector("#print");


// Have text box appear for additional instructions
function timeSteps() {
    if (am.checked == true && pm.checked == true) {
        console.log('Both checked');
        bothText.style.display = "block";
        amText.style.display = "none";
        pmText.style.display = "none";

    } else if (am.checked == true) {
        console.log('AM checked');
        amText.style.display = "block";
        pmText.style.display = "none";
        bothText.style.display = "none";

    } else if (pm.checked == true) {
        console.log('PM checked');
        pmText.style.display = "block";
        amText.style.display = "none";
        bothText.style.display = "none";

    } else {
        console.log('None checked');
        amText.style.display = "none";
        pmText.style.display = "none";
        bothText.style.display = "none";
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

// Display preset instructions for prescription
//function productSelect() {
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
// }
    
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
