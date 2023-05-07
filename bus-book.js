const phase=document.getElementById("bus-available");
const from=document.getElementById("from");
const to=document.getElementById("to");
const foot=document.getElementById("footer");
phase.style.display="none";
if(phase.style.display=="none"){
    foot.style.margin="20rem 0 0 0";
    
}

function display(){
    if (from.value == "") {
        phase.display = "none";
        
    }
    else {
        phase.display = "block";
        foot.style.margin="0rem 0 0 0";
    }
    if (to.value == "") {
        phase.style.display = "none";
        
    } else {
        phase.style.display = "block";
        foot.style.margin="0rem 0 0 0";
    }
}
