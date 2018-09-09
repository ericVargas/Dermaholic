// Have text box appear for additional instructions
function timeSteps(){
    let am = document.querySelector("#am");
    let pm = document.querySelector("#pm");
    let morning = document.querySelector("#morning");
    let evening = document.querySelector("#evening");
    
    if (am.checked == true && pm.checked == true){
        console.log('Both checked');
        morning.style.display = "block";
        evening.style.display = "block";
        
    } else if (am.checked == true){
        console.log('AM checked');
        morning.style.display = "block";
        evening.style.display = "none";
        
    } else if (pm.checked == true){
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
function productSelect(){
    let dif = document.querySelector("#dif");
    let cli = document.querySelector("#cli");
    let mup = document.querySelector("#mup");
    let duo = document.querySelector("#duo");
    let bpw = document.querySelector("#bpw");
    let text = document.querySelector("#instruct");
    
    if (dif.selected == true){
        console.log('Dif selected');
        text.innerHTML = "Differin 0.1% Gel";
        
    } else if (cli.selected == true){
        console.log('Cli selected');
        text.innerHTML = "Clindamycin Lotion";
        
    } else if (mup.selected == true){
        console.log('Mup selected');
        text.innerHTML = "Mupirocin";
        
    } else if (duo.selected == true){
        console.log('Duo selected');
        text.innerHTML = "Duofilm 17%";
        
    } else if (bpw.selected == true){
        console.log('bpw selected');
        text.innerHTML = "Benzoyl Peroxide Wash";
        
    } else {
        console.log('None selected');
    }
}