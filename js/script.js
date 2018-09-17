// Different products
let dif = document.querySelector("#dif");
let cli = document.querySelector("#cli");
let mup = document.querySelector("#mup");
let duo = document.querySelector("#duo");
let bpw = document.querySelector("#bpw");

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

let sunAM = document.querySelector("#sunAM");
let sunPM = document.querySelector("#sunPM");

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


// Checks which dif box is checked to display
function difChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode('Clindamycin Lotion - Apply thin layer to "hot spots" every morning.');
    li.appendChild(liText);
    
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


// Checks which cli box is checked to display
function cliChecked() {
    let li = document.createElement("LI");
    let liText = document.createTextNode("Differin 0.1% Gel - Apply pea size amount to full dry face after cleansing. Avoid applying directly to under eyes, corners of mouth and creases of nose. Start every other night and increase to nightly as tolerated.");
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







































// onclick="difChecked()"






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
//}









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
