//variables 
let registrodeamigos = []; 
let lista_de_amigos = "";
 //agrega nombre y verifica si se inceta vacio
function agregarAmigo() {
   lista_de_amigos = document.getElementById(`amigo`).value;
    
    if (lista_de_amigos !== ``) {
        
        registrodeamigos.push(lista_de_amigos);
        document.getElementById(`amigo`).value = "";
        
        lista_del_sorteo();

    } else{
        alert (`Error: Por favor, inserte un nombre`);
    }
     console.log (registrodeamigos);

    return; 
}
function lista_del_sorteo (){
    const lista = document.getElementById("lista_del_sorteo");
    lista.innerHTML = "";
        for (let i = 0; i < registrodeamigos.length; i++){
            const nueva_lista = document.createElement("li");
            nueva_lista.textContent = registrodeamigos[i];
            lista.appendChild(nueva_lista);
        }
}




 



