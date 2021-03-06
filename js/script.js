$(document).ready(function(){
  $(".statsec h2").hover(
    function(){
      $(this).css({"color":"rgba(255, 255, 255, 1)", "transition":"all 200ms cubic-bezier(0.795, 0.005, 0.325, 1.005)"});
      $(this).addClass("currentStatSec");
    },
    function(){
      $(this).css({"color":"rgba(255, 255, 255, 0.5)"});
      $(this).removeClass("currentStatSec");
      $("#selStat").css({"color":"rgba(255, 255, 255, 1)"});
    }
  );

  $(".statsec h2").click(function(){
    $(".statsec h2").css({"background":"#0A141A", "color":"rgba(255, 255, 255, 0.5)"});
    $(".statsec h2").removeAttr('id');
    $(this).css({"background":"#0b1013", "color":"rgba(255, 255, 255, 1)"});
    $(this).attr('id','selStat');
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

  $(".teams, .players").hover(
    function(e){
      $(".popout").css({"display":"block"});
      $(".popout").css("top", (e.pageY - 20)+"px")
      $(".popout").css("left", (e.pageX + 20)+"px")
    },
    function(){
      $(".popout").css({"display":"none"});
    }
  );
});
