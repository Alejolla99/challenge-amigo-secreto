//variables 
let registrodeamigos = []; 

 //agrega nombre y verifica si se inceta vacio
function agregarAmigo() {
   let nombre = document.getElementById(`amigo`).value.trim().toLowerCase();
    
    if (nombre !== "") {   

        //verificar duplicados

        if (registrodeamigos.includes(nombre)){
            alert("Error, Ese nombre ya está en la lista");

            document.getElementById("amigo").value = "";

            return;
        }
        
        registrodeamigos.push(nombre);

        //limpiar el imput y mensajes previos

        document.getElementById(`amigo`).value = "";
        document.getElementById(`resultado`).innerHTML = "";
        document.getElementById(`termina_la_lista`).innerHTML = "";

        mostrar__lista();

    } else{
        alert (`Error: Por favor, inserte un nombre.`);
    }

     console.log (registrodeamigos);

    return; 
}
function mostrar__lista(){
    const lista = document.getElementById("lista_amigos");
    //limpiar la lista
    lista.innerHTML = ""; 
        for (let i = 0; i < registrodeamigos.length; i++){
            const nuevo_nombre = document.createElement("li");
            nuevo_nombre.textContent = registrodeamigos[i];
            lista.appendChild(nuevo_nombre);
        }
}

 function sortearAmigo(){
    // validar si hay un amigo en lista
    if (registrodeamigos.length === 0){
        alert("No, hay amigos disponibles para sortear. Ingrese nombres primero");
        return;
    }
    let indice = Math.floor(Math.random() * registrodeamigos.length);
    var nombre__elegido = registrodeamigos[indice];

    //mostrar en pantalla
    document.getElementById("resultado").textContent = "🎁 tu amigo selecionado es: " + nombre__elegido;

    console.log("Amigo seleccionado: " + nombre__elegido);

    //elimina al amigo sorteado de la lista

    registrodeamigos.splice(indice, 1);

    mostrar__lista();

    //si despues de eliminar ya no quedan, mostrar mensaje final
    if (registrodeamigos.length === 0){
        
        document.getElementById("resultado").textContent = "🎁 tu amigo selecionado es: " + nombre__elegido;

        document.getElementById("termina_la_lista").textContent = "¡¡¡ Todos los amigos ya fueron sorteados !!!"
    }

    return nombre__elegido;
}



