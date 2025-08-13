//variables 
let registrodeamigos = []; 
let lista_de_amigos = "";
 //agrega nombre y verifica si se inceta vacio
function agregarAmigo() {
   lista_de_amigos = document.getElementById(`amigo`).value;
    
    if (lista_de_amigos !== ``) {
        
        registrodeamigos.push(lista_de_amigos);
        document.getElementById(`amigo`).value = "";

    } else{
        alert (`Error: Por favor, inserte un nombre`);
    }
     console.log (registrodeamigos);

    return; 
}





 



