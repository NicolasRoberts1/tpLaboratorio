console.log(jugadores);

const contenedor_cards = document.getElementById("contenedor_cards");

// Obtener todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Obtener el input de busqueda
const inputBusqueda = document.getElementById('buscar');

let templateCard = ""

function crearTarjetas() {
    templateCard = ""
    jugadores.forEach((jugador) => {
        templateCard += `<div class="card">
        <img src="${jugador.image}" alt="${jugador.type} ${jugador.id}">
        <p>${jugador.name}</p>
        <button class="btn btn-danger">Mas info</button>
        </div>`;
    })
    // Agregando las cards al contenedor
    contenedor_cards.innerHTML = templateCard;
}

// crearTarjetas()

let jugadoresFiltrados = []

let checkboxesSeleccionados = [];

if (checkboxesSeleccionados.length === 0) {
    templateCard = ""
    crearTarjetas()
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Agregar el valor del checkbox al array checkboxesSeleccionados si está seleccionado
            checkboxesSeleccionados.push(checkbox.value);
            crearTarjetasCheck()
        } else {
            // Eliminar el valor del checkbox del array checkboxesSeleccionados si está deseleccionado
            const index = checkboxesSeleccionados.indexOf(checkbox.value);
            checkboxesSeleccionados.splice(index, 1);

            crearTarjetasCheck()

            // Si el array está vacio cargo todas las cards
            if (checkboxesSeleccionados.length === 0) {
                templateCard = ""
                crearTarjetas()
            }

        }
        // Mostrar los elementos seleccionados en la consola
        console.log('Checkboxes seleccionados:', checkboxesSeleccionados);
    });
});


function crearTarjetasCheck() {

    jugadoresFiltrados = jugadores.filter(jugador => checkboxesSeleccionados.includes(jugador.type));
    console.log(jugadoresFiltrados);

    templateCard = ""
    jugadoresFiltrados.forEach((jugador) => {
        templateCard += `<div class="card">
        <img src="${jugador.image}" alt="${jugador.type} ${jugador.id}">
        <p>${jugador.name}</p>
        <a class="btn btn-danger" href="./info.html?id=${jugador.id}">Mas info</a>
        </div>`;
    })
    // Agregando las cards al contenedor
    contenedor_cards.innerHTML = templateCard;

}

let jugadoresFiltradosInput = []

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;
    // Realizar acciones con el valor del input, como búsqueda o filtrado

    crearTarjetasInput()

    if (jugadoresFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>"
    }

    console.log(jugadoresFiltradosInput);
    let labelBuscar = document.getElementById("labelBuscar")
    labelBuscar.innerHTML = inputValue
    console.log(inputValue);
  });

  function crearTarjetasInput() {

    const textoBusqueda = inputBusqueda.value.toLowerCase();
    //otra alternativa es usando startsWith
    jugadoresFiltradosInput = jugadores.filter(jugador => jugador.name.toLowerCase().includes(textoBusqueda));

    templateCard = ""
    jugadoresFiltradosInput.forEach((jugador) => {
        templateCard += `<div class="card">
        <img src="${jugador.image}" alt="${jugador.type} ${jugador.id}">
        <p>${jugador.name}</p>
        <a class="btn btn-danger" href="./info.html?id=${jugador.id}">Mas info</a>
        </div>`;
    })
    // Agregando las cards al contenedor
    contenedor_cards.innerHTML = templateCard;

}
crearTarjetasInput();
