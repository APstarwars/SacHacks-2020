// This script grabs JSON data from All_Players_Ranking and imbeds it in the html
function teamsParser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      for (let x = 0; x < myObj.length; x++) {
        document.getElementsByClassName("teams")[x].innerHTML = myObj[x].Team;
        document.getElementsByClassName("FGM")[x].innerHTML = myObj[x].FGP;
        if(myObj[x].FGP == "FGP: Weaknesses"){
          document.getElementsByClassName("FGM")[x].classList.add("weak");
        }
        document.getElementsByClassName("PTS")[x].innerHTML = myObj[x].Points;
        if(myObj[x].Points == "Points: Weaknesses"){
          document.getElementsByClassName("PTS")[x].classList.add("weak");
        }
        document.getElementsByClassName("AST")[x].innerHTML = myObj[x].Assists;
        if(myObj[x].Assists == "Assists: Weaknesses"){
          document.getElementsByClassName("AST")[x].classList.add("weak");
        }
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
        if(myObj[x].FGM <= 50){
          document.getElementsByClassName("FGM")[x].classList.add("weak");
        }
        document.getElementsByClassName("PTS")[x].innerHTML = myObj[x].PTS;
        if(myObj[x].PTS <= 100){
          document.getElementsByClassName("PTS")[x].classList.add("weak");
        }
        document.getElementsByClassName("AST")[x].innerHTML = myObj[x].AST;
        if(myObj[x].AST <= 30){
          document.getElementsByClassName("AST")[x].classList.add("weak");
        }
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
