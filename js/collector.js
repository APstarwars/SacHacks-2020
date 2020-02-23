// This script grabs JSON data from All_Players_Ranking and imbeds it in the html
function teamsParser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      for (let x = 0; x < myObj.length; x++) {
        document.getElementsByClassName("teams")[x].innerHTML = myObj[x].Team;
      }
    };
    xmlhttp.open("GET", "data/All_Players_Ranking.txt", true);
    xmlhttp.send();
}

function playerParser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      for (let x = 0; x < myObj.length; x++) {
        document.getElementsByClassName("players")[x].innerHTML = myObj[x].Player;
      }
    };
    xmlhttp.open("GET", "data/All_Players_Ranking.txt", true);
    xmlhttp.send();
}