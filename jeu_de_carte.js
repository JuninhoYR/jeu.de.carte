let imports = require("./choices1") 
const prompt = require("prompt-sync")();
function menu(){
    console.log("              ")
    console.log("                 ______-jeu de carte-______")
    console.log("                 |                        |")
    console.log("                 |                        |")
    console.log("                 |       1. play          |")
    console.log("                 |       2. guides        |")
    console.log("                 |       3. exit          |")
    console.log("                 |________________________|")
}


function askChoice(){
    return prompt("quel choix voulez-vous acceder : ")
}
function guides(){
    console.log ("le but de ce jeu est faire une jeu de carte qui se fait en 3 round.")
}

function jeu_de_carte(){
    
    let choices;
    while(true){
        choices = askChoice();
        if(choices == 1){
            imports.play();
        }
        if(choices == 2){
        guides();
        }
        if(choices == 3){
        console.log("au revoir");break;
        }
    }
}
function execute(){
    menu();
    jeu_de_carte();
}
execute();

