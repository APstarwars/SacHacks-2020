$(document).ready(function(){
  $(".statsec h2").click(function(){
    $(".statsec h2").css({"background":"#0A141A", "color":"rgba(255, 255, 255, 0.5)"});
    $(this).css({"background":"#0b1013", "color":"rgba(255, 255, 255, 1)"});
  });
});

window.onload = function() {

}

document.getElementsByClassName("stat1").onclick = function(evt){
  document.getElementsByClassName("statset1").style = "display:flex";
  document.getElementsByClassName("statset2").style = "display:none";
  document.getElementsByClassName("statset3").style = "display:none";
}

document.getElementsByClassName("stat2").onclick = function(evt){
  document.getElementsByClassName("statset1").style = "display:none";
  document.getElementsByClassName("statset2").style = "display:flex";
  document.getElementsByClassName("statset3").style = "display:none";
}

document.getElementsByClassName("stat3").onclick = function(evt){
  document.getElementsByClassName("statset1").style = "display:none";
  document.getElementsByClassName("statset2").style = "display:none";
  document.getElementsByClassName("statset3").style = "display:flex";
}

function swapTab(){

}
