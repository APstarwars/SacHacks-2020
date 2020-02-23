// This script grabs JSON data from players.txt & king's-guard.txt and imbeds it in the html
function parseDemo() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = myObj.name;
    };
    xmlhttp.open("GET", "data/json_demo.txt", true);
    xmlhttp.send();
}

function parsePlayers() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var players = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = players.team;
    };
    xmlhttp.open("GET", "data/players.txt", true);
    xmlhttp.send();
}

function parseTeams() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var teams = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = teams.name;
    };
    xmlhttp.open("GET", "data/king's-guard.txt", true);
    xmlhttp.send();
}