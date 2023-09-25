
function start_speed() {
    document.getElementById("back").style.animationName ="ani";

}




function show_speed_box(){
    document.getElementById("speed-box").style.visibility = "visible";
    document.getElementById("speed-box").style.marginTop = "95px";
    
    
}

function myfun(){
  let a =  document.getElementById("speed-input").value;
  let animationDuration = 200 / a; 
  let back =  document.getElementById("back").style.animationDuration = `${animationDuration}s`;
}


function stop_fan() {
    document.getElementById("back").style.animationName ="";
}