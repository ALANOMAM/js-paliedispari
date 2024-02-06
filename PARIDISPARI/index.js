/*
Pari e Dispari
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.
*/

let numeroUser = 3; /*test*/
console.log("user",numeroUser)

function pcRandom(){
 let random = Math.floor((Math.random()*5)+1)
 return random
}

let numeroComputer = pcRandom()
console.log("random pc",numeroComputer)



function pariODispari(a,b){
    
    if((a+b) % 2 == 0){
       return "pari"
    }else{
        return "dispari"
    }

}

let risultato = pariODispari(numeroUser,numeroComputer) 

console.log("risultato : ",risultato)