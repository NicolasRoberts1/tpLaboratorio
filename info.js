const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const jugadorBuscado = jugadores.find( jugador => jugador.id == id)

const contenedor = document.querySelector(".container_info")

contenedor.innerHTML = `
<div class="column">
<h3 class="title">${jugadorBuscado.name}</h3>
<div class="contenedorImagen">
  <img src="${jugadorBuscado.image}" alt="Imagen del jugador" id="imagenJugador">  
</div>

</div>
<div class="column">
<h3 class="title">Información</h3>   
<p>${jugadorBuscado.information}</p>
</div>`