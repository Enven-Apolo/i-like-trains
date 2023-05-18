function addUser(){
nomedojogador1=document.getElementById("player1NameInput").value;
nomedojogador2=document.getElementById("player2NameInput").value;
localStorage.setItem("player1Name",nomedojogador1);
localStorage.setItem("player2Name",nomedojogador2);
window.location="game_page.html"
}


