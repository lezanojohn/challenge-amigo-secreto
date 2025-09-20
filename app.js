// Array que almacenará los nombres de los amigos ingresados
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    mostrarAmigos();
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento <li> por cada amigo
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
