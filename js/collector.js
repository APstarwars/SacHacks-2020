// This script grabs JSON data from All_Players_Ranking and imbeds it in the html
function teamsParser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      for (let x = 0; x < myObj.length; x++) {
        document.getElementsByClassName("teams")[x].innerHTML = myObj[x].Team;
        document.getElementsByClassName("FGM")[x].innerHTML = myObj[x].FGP;
        document.getElementsByClassName("PTS")[x].innerHTML = myObj[x].Points;
        document.getElementsByClassName("AST")[x].innerHTML = myObj[x].Assists;
      }
    };
    xmlhttp.open("GET", "data/Team_Weak_Str.txt", true);
    xmlhttp.send();
}

function playerParser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      for (let x = 0; x < myObj.length; x++) {
        document.getElementsByClassName("players")[x].innerHTML = myObj[x].Player;
        document.getElementsByClassName("players")[x].setAttribute("id", myObj[x].Team);
        document.getElementsByClassName("FGM")[x].innerHTML = myObj[x].FGM;
        document.getElementsByClassName("PTS")[x].innerHTML = myObj[x].PTS;
        document.getElementsByClassName("AST")[x].innerHTML = myObj[x].AST;
      }
    };
    xmlhttp.open("GET", "data/All_Players_Ranking.txt", true);
    xmlhttp.send();
}

function getTeamData(data) {
  document.getElementById("teamname").innerHTML = data;
  document.getElementById("teamlogo").src = "images/teamlogos/" + data + ".png";
}

function getPlayerData(player, team) {
  document.getElementById("playername").innerHTML = player;
  document.getElementById("teamname").innerHTML = team;
  document.getElementById("playerpic").src = "images/playerpics/" + player + ".png";
  document.getElementById("teamlogo").src = "images/teamlogos/" + team + ".png";
}