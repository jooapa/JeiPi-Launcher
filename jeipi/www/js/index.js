var angryBirds = ["Angry Birds", "is a popular game that is played by many people around the world. Where you shoot birds at pigs.", "https://www.91-cdn.com/hub/wp-content/uploads/2022/04/AB.jpg"]
var badPiggies = ["Bad Piggies", "is a game where you build a contraption and try to get to the end of the level." , "https://i.ytimg.com/vi/YsCpDaSooWA/maxresdefault.jpg"]
var SForPF = ["School food OR Prison food", "is a game where you need to deside if the picture is school food or prison food." , "https://img.itch.zone/aW1nLzExNDgzODk1LnBuZw==/315x250%23c/Ko8KEq.png"]
var cookieStroids = ["cookieStroids", "is a game where you shoot at asteroids." , "https://img.itch.zone/aW1nLzc5NDA3ODAucG5n/original/WfBb7x.png"]
console.log(angryBirds[1])
// onload
window.onload = function(){
    showButtons();
}
function showButtons(){
    var buttonDiv = document.getElementById("sideBar");
    buttonDiv.innerHTML = "<br>";
    appendDiv = '<button onclick="showGame(angryBirds)"><img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/04/AB.jpg"></button>'
    appendDiv += '<button onclick="showGame(badPiggies)"><img src="https://i.ytimg.com/vi/YsCpDaSooWA/maxresdefault.jpg"></button>'
    appendDiv += '<button onclick="showGame(SForPF)"><img src="https://img.itch.zone/aW1nLzExNDgzODk1LnBuZw==/315x250%23c/Ko8KEq.png"></button>'
    appendDiv += '<button onclick="showGame(cookieStroids)"><img src="https://img.itch.zone/aW1nLzc5NDA3ODAucG5n/original/WfBb7x.png"></button>'
    buttonDiv.innerHTML += appendDiv;
}
function showGame(game){
    buttonCode = '<button class="button" type="button"><span class="button__text">Download</span><span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span></button>'
    appendDiv = '<div class="content"> <h1>'+ game[0] +'</h1> '+ buttonCode +' <p>'+game[1]+'</p> </div> <div class="backdropImg"><img src="'+game[2]+'"></div> </div>'

    var gamesDiv = document.getElementById("games");
    gamesDiv.innerHTML = "";
    gamesDiv.innerHTML += appendDiv;

}
