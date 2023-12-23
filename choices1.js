function choices1(){
    let prompt = require("prompt-sync")();
    let tour = 0; 
    let result_playor = 0;
    let result_robot = 0;
    let cartes = ["feu","eau","plante"];
    while(tour < 3){
    tour++;
    let player = prompt("quelle carte voulez-vous envoyez? ("+cartes+"): " );
    let adversary = cartes[Math.floor(Math.random() * cartes.length)];
        console.log(adversary);
    
    if((player == "eau" && adversary == "feu") || (player == "plante" && adversary == "eau") || (player == "feu" && adversary == "plante")){
        result_playor++;
    }
    
    else if((adversary == "eau" && player == "feu") || (adversary == "plante" && player == "eau") || (adversary == "feu" && player == "plante")){
        result_robot++;
    }
    
    console.log(result_playor+" : "+result_robot);
       
    }

        if(result_playor > result_robot){
            console.log("You win");
        }
        else if(result_playor < result_robot){
            console.log("You lose");
        }
        if(result_playor == result_robot){        
            let rejouer = prompt("voulez-vous retenter ?: ");                     
                if(rejouer == "oui"){
                    choices1();
                }
                if(rejouer == "non"){};
        }
}
    
    exports.play = choices1;
