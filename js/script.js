// Different products
let dif = document.querySelector("#dif");
let cli = document.querySelector("#cli");
let mup = document.querySelector("#mup");
let duo = document.querySelector("#duo");
let bpw = document.querySelector("#bpw");

// Time frame checkbox

let time = document.getElementsByClassName("time");
let am = document.getElementsByClassName("am");
let pm = document.getElementsByClassName("pm");

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

let sunAM = document.querySelector("#sunAM");
let sunPM = document.querySelector("#sunPM");

let comments = document.querySelector("#comments");


// Preview area
let preview = document.querySelector("#preview");
let morning = document.querySelector(".morning");
let evening = document.querySelector(".evening");
let cmtText = document.querySelector(".cmtText");
let print = document.querySelector("#print");







// Have text box appear for additional instructions
function timeSteps() {
    if (am.checked == true && pm.checked == true) {
        console.log('TF both checked');
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
























// Preview submitted text to print
function previewText() {
//    if (dif.selected == true) {
//        name.innerHTML = dif.innerHTML;
//
//    } else if (cli.selected == true) {
//        name.innerHTML = cli.innerHTML;
//
//    } else if (mup.selected == true) {
//        name.innerHTML = mup.innerHTML;
//
//    } else if (duo.selected == true) {
//        name.innerHTML = duo.innerHTML;
//
//    } else if (bpw.selected == true) {
//        name.innerHTML = bpw.innerHTML;
//
//    } else {
//        console.log('No name');
//    }

// Display preset instructions for prescription
//function productSelect() {
//    if (dif.selected == true) {
//        console.log('Dif selected');
//        instruct.innerHTML = "Apply pea size amount to full dry face after cleansing. Avoid applying directly to under eyes, corners of mouth and creases of nose. Start every other night and increase to nightly as tolerated.";
//
//    } else if (cli.selected == true) {
//        console.log('Cli selected');
//        instruct.innerHTML = 'Apply thin layer to "hot spots" every morning.';
//
//    } else if (mup.selected == true) {
//        console.log('Mup selected');
//        instruct.innerHTML = "Apply twice a day to affected areas for 7-10 days.";
//
//    } else if (duo.selected == true) {
//        console.log('Duo selected');
//        instruct.innerHTML = "Duofilm 17%";
//
//    } else if (bpw.selected == true) {
//        console.log('bpw selected');
//        instruct.innerHTML = "Cleanse face every morning.";
//
//    } else {
//        console.log('None selected');
//    }
//// }
//    
    console.log(am.checked);
    timeSteps();
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
