$(document).ready(function(){
  $(".statsec h2").click(function(){
    $(".statsec h2").css({"background":"#0A141A", "color":"rgba(255, 255, 255, 0.5)"});
    $(this).css({"background":"#0b1013", "color":"rgba(255, 255, 255, 1)"});
  });

  $("h2.stat1").click(function(){
    $("section.statset1").css({"display":"block"});
    $("section.statset2").css({"display":"none"});
    $("section.statset3").css({"display":"none"});
  });

  $("h2.stat2").click(function(){
    $("section.statset1").css({"display":"none"});
    $("section.statset2").css({"display":"block"});
    $("section.statset3").css({"display":"none"});
  });

  $("h2.stat3").click(function(){
    $("section.statset1").css({"display":"none"});
    $("section.statset2").css({"display":"none"});
    $("section.statset3").css({"display":"block"});
  });
});
