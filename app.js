//variables 
let registrodeamigos = []; 

 //agrega nombre y verifica si se inceta vacio
function agregarAmigo() {
   let nombre = document.getElementById(`amigo`).value;
    
    if (nombre !== "") {     
        registrodeamigos.push(nombre);
        //limpiar el imput

        document.getElementById(`amigo`).value = "";

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
    let nombre__elegido = registrodeamigos[indice];

    //mostrar en pantalla
    document.getElementById("resultado").textContent = "🎁 tu amigo selecionado es: " + nombre__elegido;

    console.log("Amigo seleccionado: " + nombre__elegido);

    return nombre__elegido;
}



