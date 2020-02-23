// This script grabs JSON data from players.txt & king's-guard.txt and imbeds it in the html
function parser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      var myObj = JSON.parse(this.responseText);
      for (let x = 0; x < myObj.length; x++) {
        document.getElementsByClassName("teams")[x].innerHTML = myObj[x].name;
      }
    };
    xmlhttp.open("GET", "data/json_demo.txt", true);
    xmlhttp.send();
}