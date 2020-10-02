var farge = document.getElementById("output");
var input = document.getElementById("input");
var count = document.getElementById("counter");
var feil = document.getElementById("feil");
let counter = -1;
let feilAntall = 0;

window.onload = tilfeldigOrd();

function tilfeldigOrd() {
    let ord = ["red", "blue", "black", "green", "yellow", "pink", "purple", "orange", "brown"];
    var tilfeldig = Math.floor(Math.random() * ord.length);
    
    document.getElementById("output").innerHTML = "<h1>" + ord[tilfeldig] + "</h1>";

    if(input.value == farge.style.color) {
        console.log("Riktig");
        counter++;
        count.innerHTML = "Counter: " + counter;
        input.value = "";
    } else {
        console.log("Feil");
        feilAntall++;
        feil.innerHTML = "Feil: " + feilAntall;
        input.value = "";        
    }

    let farger = ["red", "blue", "black", "green", "yellow", "pink", "purple", "orange", "brown"];
    var tilfeldigF = Math.floor(Math.random() * farger.length);

    farge.style.color = farger[tilfeldigF];

}


