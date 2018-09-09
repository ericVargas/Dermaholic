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
