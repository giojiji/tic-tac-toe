var player = "X";
var computer = "O";
var playerarr = [];
var computerarr = [];
var playeronepoint = 0
var playertwopoint = 0
var drawpoint = 0
var gamesoptioni = 0
var ujrebissiaversia = [0,1,2,3,4,5,6,7,8]


const wincoindition1 = [ "0", "1", "2"]
const wincoindition2 = [ "3", "4", "5"]
const wincoindition3 = [ "6", "7", "8"]
const wincoindition4 = [ "0", "3", "6"]
const wincoindition5 = [ "1", "4", "7"]
const wincoindition6 = [ "2", "5", "8"]
const wincoindition7 = [ "0", "4", "8"]
const wincoindition8 = [ "2", "4", "6"]

const allstatmetns = [
  wincoindition1,
  wincoindition2,
  wincoindition3,
  wincoindition4,
  wincoindition5,
  wincoindition6,
  wincoindition7,
  wincoindition8,
  ]
var shedegi = 0




var q = Math.floor(Math.random() * 10);
if(q % 2 == 0){
document.getElementById("turn").innerHTML = "X start"}
else {document.getElementById("turn").innerHTML = "O start"}


function myFunction(event) {
var x = event.target;
if(x.getAttribute("id") == "orimotamashe"){
  gamesoptioni = 1
  x.style.color = "#F2B137";
  document.getElementById("kompiuteri").style.color = "#000000"
  document.getElementsByTagName("input")[0].style.display = "flex"
  document.getElementsByTagName("input")[1].style.display = "flex"
} else if(x.getAttribute("id") == "kompiuteri"){
  gamesoptioni = 2
  x.style.color = "#F2B137";
  document.getElementById("orimotamashe").style.color = "#000000"
  document.getElementsByTagName("input")[0].style.display = "none"
  document.getElementsByTagName("input")[1].style.display = "none"
}

if(gamesoptioni == 1){
if(q % 2 == 0){
if(x.textContent == "" && shedegi == 0){ 
x.innerHTML = player
q++
playerarr.push(x.getAttribute("value"))
document.getElementById("turn").innerHTML = "O turn";
x.style.color = "#31C3BD";
var payercomarry = computerarr.concat(playerarr);
if(payercomarry.length > 8){
  document.getElementById("end").innerHTML = "it is draw"
  document.getElementById("end").style.display = "flex";
}
  
// აქ იწყება  უჯრების შემოწმება
for(var o = 0; o < allstatmetns.length; o++){
var multipleExist = allstatmetns[o].every(value => {
return playerarr.includes(value);
} );

if(multipleExist == true){
playeronepoint += 1
document.getElementById("end").innerHTML = playeronex.value + " " + "win"
document.getElementById("end").style.display = "flex";
document.getElementById("playeronepoint").innerHTML = playeronex.value + "<br>" + playeronepoint
shedegi = 1
if(playeronepoint == 5){
  document.getElementById("end").innerHTML = "game over" + "<br>" + playeronex.value +  " " + "win game"
  playeronepoint = 0;
  document.getElementById("playeronepoint").innerHTML = playeronex.value + "<br>" + playeronepoint;
  playertwopoint = 0;
  document.getElementById("playertwopoint").innerHTML = playertwoo.value + "<br>" + playertwopoint;
  drawpoint = 0
  document.getElementById("drawpoint").innerHTML = "TIES" + "<br>" + drawpoint
}
}}}}


else {
if(x.textContent == "" && shedegi == 0){
x.innerHTML = computer
q++
document.getElementById("turn").innerHTML = "X turn"
computerarr.push(x.getAttribute("value"))
x.style.color = "#F2B137";
var payercomarry = computerarr.concat(playerarr);
if(payercomarry.length > 8){
  document.getElementById("end").innerHTML = "it is draw"
  document.getElementById("end").style.display = "flex";
}
// აქ იწყება მოწინაღდეგის უჯრების შემოწმება
for(var o = 0; o < allstatmetns.length; o++){
var multipleExist = allstatmetns[o].every(value => {
return computerarr.includes(value);
}); 
if(multipleExist == true){
playertwopoint += 1
document.getElementById("end").innerHTML = playertwoo.value + " " + "win"
document.getElementById("end").style.display = "flex";
document.getElementById("playertwopoint").innerHTML = playertwoo.value + "<br>" + playertwopoint;
shedegi = 1
if(playertwopoint == 5){
  document.getElementById("end").innerHTML = "game over" + "<br>"  + playertwoo.value + " " + "win game"
  playertwopoint = 0;
  document.getElementById("playertwopoint").innerHTML = playertwoo.value + "<br>" + playertwopoint;
  playeronepoint = 0;
  document.getElementById("playeronepoint").innerHTML = playeronex.value + "<br>" + playeronepoint;
  drawpoint = 0
  document.getElementById("drawpoint").innerHTML = "TIES" + "<br>" + drawpoint
}
}}}}
if(shedegi == 0 && payercomarry.length > 8) {
  drawpoint += 1
  document.getElementById("drawpoint").innerHTML = "TIES" + "<br>" + drawpoint}
}

// აქ იწყება კომპიუტერთან თამაშის ვერსიის აწყობა
if(gamesoptioni == 2){
q = 2
document.getElementById("turn").innerHTML = "player X start"
if(q % 2 == 0){
if(x.textContent == "" && shedegi == 0){
var x = event.target;
x.innerHTML = player
x.style.color = "#31C3BD";
var numberintt = parseInt(x.getAttribute(("value")))
var indexx = ujrebissiaversia.indexOf(numberintt);
if (indexx > -1) { 
ujrebissiaversia.splice(indexx, 1);}
playerarr.push(x.getAttribute("value"))
for(var o = 0; o < allstatmetns.length; o++){
  var multipleExist = allstatmetns[o].every(value => {
  return playerarr.includes(value);
  } );
  if(multipleExist == true){
  playeronepoint += 1
  document.getElementById("end").innerHTML = "player X win"
  document.getElementById("end").style.display = "flex";
  document.getElementById("playeronepoint").innerHTML = "X (YOU)" + "<br>" + playeronepoint
  shedegi = 1

  if(playeronepoint == 5){
    document.getElementById("end").innerHTML = "game over" + "<br>" + "player X win game"
    playeronepoint = 0;
    document.getElementById("playeronepoint").innerHTML = "X (YOU)" + "<br>" + playeronepoint;
    playertwopoint = 0;
    document.getElementById("playertwopoint").innerHTML = "X (YOU)" + "<br>" + playertwopoint;
    drawpoint = 0
    document.getElementById("drawpoint").innerHTML = "TIES" + "<br>" + drawpoint
  }
  }
  if(shedegi){
    return;
  }}
if(shedegi == 0 && ujrebissiaversia.length == 0){
  drawpoint += 1
  document.getElementById("drawpoint").innerHTML = "TIES" + "<br>" + drawpoint
  document.getElementById("end").innerHTML = "it is draw"
  document.getElementById("end").style.display = "flex";
}

q++}

var randomarrynumber = ujrebissiaversia[Math.floor(Math.random()*ujrebissiaversia.length)];
if(q % 2 !== 0){
var automaticmove = document.getElementsByClassName("tictactoe")
automaticmove[randomarrynumber].innerHTML = computer
automaticmove[randomarrynumber].style.color = "#F2B137";
var index = ujrebissiaversia.indexOf(randomarrynumber)
computerarr.push(automaticmove[randomarrynumber].getAttribute("value"))
if (index > -1) { 
ujrebissiaversia.splice(index, 1);}
for(var o = 0; o < allstatmetns.length; o++){
  var multipleExist = allstatmetns[o].every(value => {
  return computerarr.includes(value);
  }); 
  if(multipleExist == true){
  playertwopoint += 1
  document.getElementById("end").innerHTML = "player O win"
  document.getElementById("end").style.display = "flex";
  document.getElementById("playertwopoint").innerHTML = "O (CPU)" + "<br>" + playertwopoint;
  shedegi = 1
  if(playertwopoint == 5){
    document.getElementById("end").innerHTML = "game over" + "<br>" + "player O win game"
    playertwopoint = 0;
    document.getElementById("playertwopoint").innerHTML = "X (YOU)" + "<br>" + playertwopoint;
    playeronepoint = 0;
    document.getElementById("playeronepoint").innerHTML = "X (YOU)" + "<br>" + playeronepoint;
    drawpoint = 0
    document.getElementById("drawpoint").innerHTML = "TIES" + "<br>" + drawpoint
  }
  }}
q++

}}}

}


function restargame(){
  var clearboxes = document.getElementsByClassName("tictactoe")
  while(playerarr.length > 0){
    playerarr.pop();
  }
  while(computerarr.length > 0){
    computerarr.pop();
  }
  for(let r = 0; r < clearboxes.length; r++){
  clearboxes[r].innerText = ""}
  document.getElementById("end").style.display = "none";
  shedegi = 0;
  ujrebissiaversia = [0,1,2,3,4,5,6,7,8]
  q++
  // location.reload();
}



function begingame() {
  if (gamesoptioni == 1 || gamesoptioni == 2){
  document.getElementById("startgames").style.display = "none";
    console.log(gamesoptioni)} else {
      alert("Choose a game type !!!")
    }
    var playeronex = document.getElementById("playeronex").value
    var playertwoo = document.getElementById("playertwoo").value
    document.getElementById("playeronepoint").innerHTML = playeronex + "<br>" + 0;
    document.getElementById("playertwopoint").innerHTML = playertwoo + "<br>" + 0;
}


function reloadgame() {
  location.reload();
}
